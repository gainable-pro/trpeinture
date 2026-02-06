"use server";

import { Resend } from "resend";

// Initialize Resend with API Key from Env
// Note: User needs to add RESEND_API_KEY in Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadEmail(formData: FormData) {
    try {
        const rawData = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            city: formData.get("city"),
            type: formData.get("type"),
            message: formData.get("message"),
        };

        // Construct Email Body
        const htmlBody = `
      <h2>Nouvelle demande de devis (TR Peinture)</h2>
      <p><strong>Nom:</strong> ${rawData.name}</p>
      <p><strong>Téléphone:</strong> ${rawData.phone}</p>
      <p><strong>Email:</strong> ${rawData.email}</p>
      <p><strong>Ville:</strong> ${rawData.city}</p>
      <p><strong>Type:</strong> ${rawData.type}</p>
      <p><strong>Message:</strong><br/>${rawData.message}</p>
    `;

        // Send Email
        // Replace 'delivered@resend.dev' with your verified domain or testing email
        // For now using the resend testing logic if domain not verified, or assume user has one.
        // Ideally 'onboarding@resend.dev' allows sending to ONLY the account owner email.

        // We'll target the owner's email.
        const { data, error } = await resend.emails.send({
            from: "TR Peinture <contact@tr-peinture.com>",
            to: ["t.rpeinture.ent@gmail.com"],
            reply_to: rawData.email as string,
            subject: `Nouveau Lead: ${rawData.name} (${rawData.city})`,
            html: htmlBody,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true, data };

    } catch (err) {
        console.error("Server Action Error:", err);
        return { success: false, error: "Failed to send email" };
    }
}
