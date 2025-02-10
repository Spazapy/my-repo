const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

const transporter = nodemailer.createTransport({
    host: "mail.gmx.net",
    port: 587, // Alternativ: 465 für SSL
    secure: false, // true für Port 465, false für Port 587
    auth: {
        user: "testpython1928@gmx.de", // ✅ Verwende die komplette GMX-Adresse!
        pass: "testpw1968!" // ❗ Nutze ein App-Passwort statt des normalen Passworts
    }
});

app.post("/send-email", async (req, res) => {
    try {
        const info = await transporter.sendMail({
            from: "testpython1928@gmx.de",
            to: "n.marcel.1994@gmx.de",
            subject: "Ja Button geklickt",
            text: req.body.message || "Der Button wurde geklickt!"
        });

        console.log("✅ E-Mail gesendet:", info); // Fügt Debugging hinzu
        res.json({ success: true, message: "Email sent!", info });
    } catch (error) {
        console.error("❌ Fehler beim E-Mail-Versand:", error);
        res.status(500).json({ success: false, message: "Error sending email", error });
    }
});

app.post("/send-email/no", async (req, res) => {
    try {
        const info = await transporter.sendMail({
            from: "testpython1928@gmx.de",
            to: "n.marcel.1994@gmx.de",
            subject: "Nein-Button geklickt",
            text: "Der NEIN-Button wurde geklickt!"
        });

        console.log("✅ NEIN-E-Mail gesendet:", info);
        res.json({ success: true, message: "Nein-E-Mail gesendet!" });
    } catch (error) {
        console.error("❌ Fehler beim Versand der NEIN-E-Mail:", error);
        res.status(500).json({ success: false, message: "Fehler beim Versand der NEIN-E-Mail" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
