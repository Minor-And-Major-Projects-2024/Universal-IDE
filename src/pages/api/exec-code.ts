export default async function handler(req: any, res: any) {
  fetch('https://WhaleBoat-Official-Language-Server-t.coder100.repl.co/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  })
    .then((r) =>
      !r.ok
        ? res.end(`[IDE] Error: Language server could not be reached.`)
        : r
    )
    .then((r) => r.text())
    .then((data) => res.end(data))
    .catch((err) =>
      res.end(`[IDE] Error: ${err}
  [IDE] Hint: Try re-running`)
    );
}

export const config = {
  api: {
    externalResolver: true,
  },
};
