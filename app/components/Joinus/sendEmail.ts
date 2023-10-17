export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/emailsender';
  
  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      alert(err);
    });
}