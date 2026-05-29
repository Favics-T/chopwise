const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function callGemini(prompt, mockFallback) {
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );
    if (!res.ok) throw new Error('Gemini error');
    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return text.replace(/```json|```/g, '').trim();
  } catch (e) {
    return typeof mockFallback === 'string' ? mockFallback : JSON.stringify(mockFallback);
  }
}
