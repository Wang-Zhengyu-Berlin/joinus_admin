export function setToken(token: string) {
  localStorage.setItem('token', token);
}

export function getToken(): string {
  const token = localStorage.getItem('token');
  if(token) {
    return token as string;
  }
  return '';
}
