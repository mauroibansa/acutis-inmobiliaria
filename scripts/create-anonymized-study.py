from __future__ import annotations

import re
import xml.etree.ElementTree as ET
from pathlib import Path

from reportlab.graphics import renderPDF
from reportlab.graphics.shapes import Drawing, Polygon
from reportlab.graphics.svgpath import SvgPath
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen.canvas import Canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "documents" / "ejemplo-estudio-mercado-acutis.pdf"
LOGO = ROOT / "public" / "brand" / "ACUTIS-logo-03.svg"

W, H = A4
NAVY = HexColor("#07172A")
INK = HexColor("#102034")
MUTED = HexColor("#667286")
IVORY = HexColor("#F5F1E8")
PAPER = HexColor("#FBFAF6")
SAND = HexColor("#BE9D66")
GREEN = HexColor("#466F60")
SILVER = HexColor("#C8C6C5")
LINE = HexColor("#DDD6CA")


def rounded(c: Canvas, x: float, y: float, w: float, h: float, color, radius: float = 10) -> None:
    c.setFillColor(color)
    c.roundRect(x, y, w, h, radius, stroke=0, fill=1)


def wrap(c: Canvas, text: str, x: float, y: float, max_width: float, font: str, size: float, leading: float, color=INK) -> float:
    words = text.split()
    lines: list[str] = []
    line = ""
    for word in words:
        candidate = f"{line} {word}".strip()
        if stringWidth(candidate, font, size) <= max_width:
            line = candidate
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    c.setFont(font, size)
    c.setFillColor(color)
    for item in lines:
        c.drawString(x, y, item)
        y -= leading
    return y


def draw_svg(c: Canvas, path: Path, x: float, y: float, width: float) -> None:
    root = ET.parse(path).getroot()
    viewbox = [float(value) for value in root.attrib["viewBox"].split()]
    source_w, source_h = viewbox[2], viewbox[3]
    scale = width / source_w
    drawing = Drawing(source_w, source_h)
    namespace = "{http://www.w3.org/2000/svg}"
    for node in list(root):
        fill = HexColor(node.attrib.get("fill", "#c8c6c5"))
        if node.tag == f"{namespace}path":
            drawing.add(SvgPath(node.attrib["d"], fillColor=fill, strokeColor=None))
        elif node.tag == f"{namespace}polygon":
            points = [float(value) for value in re.split(r"[ ,]+", node.attrib["points"].strip())]
            drawing.add(Polygon(points, fillColor=fill, strokeColor=None))
    c.saveState()
    c.translate(x, y + source_h * scale)
    c.scale(scale, -scale)
    renderPDF.draw(drawing, c, 0, 0)
    c.restoreState()


def watermark(c: Canvas) -> None:
    c.setStrokeColor(SAND)
    c.setFillColor(PAPER)
    c.roundRect(W - 180, H - 65, 138, 21, 5, stroke=1, fill=1)
    c.setFillColor(SAND)
    c.setFont("Helvetica-Bold", 6.5)
    c.drawCentredString(W - 111, H - 58, "EJEMPLO ANONIMIZADO")


def footer(c: Canvas, page: int) -> None:
    c.setStrokeColor(LINE)
    c.line(42, 36, W - 42, 36)
    c.setFont("Helvetica", 7.2)
    c.setFillColor(MUTED)
    c.drawString(42, 23, "ACUTIS · EJEMPLO DE ESTUDIO · DATOS ILUSTRATIVOS")
    c.drawRightString(W - 42, 23, str(page))


def header(c: Canvas, section: str, title: str, subtitle: str) -> None:
    c.setFillColor(SAND)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(42, H - 55, section)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(42, H - 88, title)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 10.5)
    c.drawString(42, H - 108, subtitle)


def cover(c: Canvas) -> None:
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    c.setFillColor(HexColor("#0E2A45"))
    c.circle(W * 0.87, H * 0.83, 190, stroke=0, fill=1)
    c.setStrokeColor(HexColor("#244059"))
    c.setLineWidth(0.7)
    for radius in (92, 122, 152, 182):
        c.circle(W * 0.84, H * 0.79, radius, stroke=1, fill=0)
    draw_svg(c, LOGO, 42, H - 96, 165)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 32)
    c.drawString(42, 172, "ESTUDIO DE MERCADO")
    c.setFont("Helvetica", 17)
    c.drawString(42, 142, "Vivienda unifamiliar · Campo de Gibraltar")
    c.setStrokeColor(SAND)
    c.setLineWidth(3)
    c.line(42, 116, 118, 116)
    c.setFont("Helvetica", 9)
    c.setFillColor(SILVER)
    c.drawString(42, 88, "Muestra anonimizada · Datos creados exclusivamente para mostrar el formato")


def property_page(c: Canvas) -> None:
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    header(c, "01 · EL INMUEBLE", "Qué analizamos", "La propiedad, su estado, el entorno y los factores que sostienen su valor")
    y = H - 202
    cards = [
        ("430 m²", "parcela orientativa"),
        ("210 m²", "superficie construida"),
        ("4 dormitorios", "distribución familiar"),
        ("Exterior", "jardín y piscina"),
        ("Estado", "habitable y cuidado"),
        ("Potencial", "mejora de presentación"),
    ]
    card_w = (W - 100) / 3
    for index, (value, label) in enumerate(cards):
        row, col = divmod(index, 3)
        x = 42 + col * (card_w + 8)
        card_y = y - row * 86
        rounded(c, x, card_y, card_w, 68, IVORY, 9)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 15)
        c.drawString(x + 14, card_y + 39, value)
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 8.4)
        c.drawString(x + 14, card_y + 20, label)
    y = 455
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(42, y, "LECTURA DEL INMUEBLE")
    y = wrap(c, "La valoración no parte de una cifra automática. Contrastamos superficie, estado, distribución, exteriores y percepción comercial con la oferta que compite por el mismo comprador.", 42, y - 27, W - 84, "Helvetica", 10.2, 16, MUTED)
    rounded(c, 42, y - 120, W - 84, 92, GREEN, 10)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(58, y - 53, "POSICIONAMIENTO")
    wrap(c, "Vivienda familiar con buenos atributos exteriores. La estrategia debe defender su amplitud y reducir la fricción que provocan los acabados personales.", 58, y - 74, W - 116, "Helvetica", 9.1, 14, white)
    watermark(c)
    footer(c, 2)


def comparables_page(c: Canvas) -> None:
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    header(c, "02 · MERCADO", "Referencias comparables", "Oferta observada y ajustada por superficie, estado y atributos")
    examples = [
        ("A", "Vivienda independiente con piscina", "Índice 108"),
        ("B", "Vivienda familiar en la misma zona", "Índice 101"),
        ("C", "Pareado con mayor superficie construida", "Índice 98"),
        ("D", "Vivienda para actualizar", "Índice 84"),
    ]
    y = H - 180
    for code, title, value in examples:
        rounded(c, 42, y - 88, W - 84, 74, IVORY, 10)
        c.setFillColor(SAND)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(58, y - 42, code)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(82, y - 42, title)
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 8.4)
        c.drawString(82, y - 61, "Datos y ubicación ocultos en esta muestra pública")
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 14)
        c.drawRightString(W - 58, y - 43, value)
        y -= 90
    rounded(c, 42, 175, W - 84, 104, NAVY, 10)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(58, 248, "LECTURA DEL MERCADO")
    wrap(c, "No promediamos anuncios sin contexto. Ajustamos cada referencia por ubicación, superficie, estado, exteriores y tiempo en mercado para evitar una falsa precisión.", 58, 225, W - 116, "Helvetica", 9.2, 14, SILVER)
    c.setFont("Helvetica", 7.8)
    c.setFillColor(MUTED)
    c.drawString(42, 145, "Los índices y descripciones de esta página son ficticios y solo ilustran la metodología.")
    watermark(c)
    footer(c, 3)


def valuation_page(c: Canvas) -> None:
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    header(c, "03 · VALORACIÓN", "Rango y estrategia", "Tres cifras con funciones distintas dentro de una misma estrategia")
    blocks = [
        ("VALOR DE MERCADO", "350.000–380.000 €", "Horquilla razonada según inmueble y comparables.", IVORY),
        ("SALIDA RECOMENDADA", "379.000 €", "Precio de publicación para defender valor y conservar margen.", HexColor("#EEE5D4")),
        ("OBJETIVO DE CIERRE", "360.000–370.000 €", "Estimación sujeta a documentación y respuesta real del mercado.", NAVY),
    ]
    y = H - 185
    for label, value, note, color in blocks:
        rounded(c, 42, y - 120, W - 84, 104, color, 10)
        light = color == NAVY
        c.setFillColor(SILVER if light else (SAND if label == "SALIDA RECOMENDADA" else GREEN))
        c.setFont("Helvetica-Bold", 8.5)
        c.drawString(58, y - 45, label)
        c.setFillColor(white if light else INK)
        c.setFont("Helvetica-Bold", 21)
        c.drawString(58, y - 76, value)
        c.setFillColor(SILVER if light else MUTED)
        c.setFont("Helvetica", 8.7)
        c.drawString(58, y - 96, note)
        y -= 132
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(42, 210, "RECOMENDACIÓN")
    wrap(c, "Publicar con una estrategia de seguimiento: revisar durante las primeras semanas la cantidad y calidad de los contactos, y ajustar únicamente si la evidencia lo justifica.", 42, 184, W - 84, "Helvetica", 10, 16, MUTED)
    c.setFillColor(SAND)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(42, 104, "CIFRAS FICTICIAS · NO CONSTITUYEN UNA VALORACIÓN")
    watermark(c)
    footer(c, 4)


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    c.setTitle("Ejemplo anonimizado de estudio de mercado ACUTIS")
    c.setAuthor("ACUTIS")
    cover(c)
    c.showPage()
    property_page(c)
    c.showPage()
    comparables_page(c)
    c.showPage()
    valuation_page(c)
    c.save()


if __name__ == "__main__":
    build()
