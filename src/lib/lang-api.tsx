export async function execCode(code: any, lang: any, stdin = '') {
  return await fetch('/api/exec-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code,
      lang,
      stdin,
    }),
  }).then((r) => r.text());
}
