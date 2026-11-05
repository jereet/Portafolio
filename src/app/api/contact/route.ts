import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(80),
  email: z.string().email("Ingresa un correo electrónico válido"),
  subject: z.string().min(3, "El asunto debe tener al menos 3 caracteres").max(120),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { 
          success: false, 
          errors: result.error.flatten().fieldErrors 
        }, 
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    console.log(`[Contact Form Received] From: ${name} <${email}> | Subject: ${subject}`);
    console.log(`Message: ${message}`);

    return NextResponse.json({
      success: true,
      message: "¡Mensaje recibido con éxito! Me pondré en contacto contigo a la brevedad."
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Ocurrió un error al procesar el mensaje. Por favor intenta de nuevo o escríbeme directamente por email." 
      }, 
      { status: 500 }
    );
  }
}
