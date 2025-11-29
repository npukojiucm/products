export async function GET() {
  try {
    const res = await fetch(process.env.API_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
      cache: 'no-store',
    });

    const text = await res.text();
    return new Response(text, { status: res.status });
  } catch (e) {
    return new Response('error: ' + e.toString(), { status: 500 });
  }
}
