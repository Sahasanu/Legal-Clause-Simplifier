import checkDocument from "../services/ai.service.js";

async function uploadDocumentController(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;

    const analysis = await checkDocument(filePath);

    res.json({
      success: true,
      message: "Document analyzed successfully",
      analysis,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default uploadDocumentController;
