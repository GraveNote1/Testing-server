import z from "zod"

const genres = [
  "ciencia ficción",
  "drama",
  "acción",
  "crimen",
  "romance",
  "aventura",
  "fantasía",
  "thriller",
  "musical",
  "comedia",
  "terror",
  "animación",
  "western",
  "bélica"
]

const filmSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "El título no puede estar vacío")
    .max(150, "El título no puede superar los 150 caracteres"),

  director: z
    .string()
    .trim()
    .min(1, "El director no puede estar vacío"),

  year: z.coerce
    .number()
    .int("El año de estreno debe ser un número entero")
    .min(1888, "El año debe ser posterior a 1888")
    .max(new Date().getFullYear() + 5, "El año de estreno no puede ser tan futuro"),

  genre: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.enum(genres, "El género debe estar dentro de las posibilidades"))
})

export { filmSchema }