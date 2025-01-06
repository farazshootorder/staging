// File: /app/api/proxy/route.js

export async function GET(req) {
  const url = req.url.split('?url=')[1];
  
  if (!url) {
    return new Response(JSON.stringify({ error: "URL parameter is required" }), { status: 400 });
  }

  try {
    const response = await fetch(decodeURIComponent(url));

    if (!response.ok) {
      return new Response(JSON.stringify({ error: `Failed to fetch image: ${response.statusText}` }), { status: response.status });
    }

    const imageBuffer = await response.arrayBuffer();

    return new Response(imageBuffer, {
      headers: {
        "Content-Type": response.headers.get("content-type"),
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
