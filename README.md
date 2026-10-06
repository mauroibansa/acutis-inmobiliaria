# ACUTIS Inmobiliaria

Primera versión funcional de la web multipágina de ACUTIS, orientada a la captación de propietarios en el Campo de Gibraltar.

## Stack

- Next.js 16 · App Router
- TypeScript estricto
- CSS propio y componentes reutilizables
- Preparada para sustituir `lib/properties.ts` por consultas a Sanity

## Desarrollo

```bash
npm install
npm run dev
```

Comprobaciones: `npm run lint` y `npm run build`.

## Rutas

`/`, `/vender`, `/propiedades`, `/propiedades/[slug]`, `/inversion`, `/nosotros`, `/contacto`, `/valoracion`, `/aviso-legal`, `/privacidad` y `/cookies`.

## Pendiente antes de producción

- Sustituir propiedades y fotografías de demostración por contenido aprobado.
- Completar datos legales y textos revisados por asesoría.
- Conectar formularios a un proveedor con almacenamiento y protección anti-spam.
- Confirmar derechos de uso de todos los recursos gráficos.
- Integrar Sanity como fuente editorial cuando el catálogo empiece a crecer.
