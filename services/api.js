import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://famuunpwupdlqnpbwsmd.supabase.co/rest/v1/',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhbXV1bnB3dXBkbHFucGJ3c21kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzkzMzc5OSwiZXhwIjoyMDA5NTA5Nzk5fQ.RIqFv3Aq02-QYg7q9aZfvtDs46aVGe2GyfFWXgrAJJU',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhbXV1bnB3dXBkbHFucGJ3c21kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzkzMzc5OSwiZXhwIjoyMDA5NTA5Nzk5fQ.RIqFv3Aq02-QYg7q9aZfvtDs46aVGe2GyfFWXgrAJJU',
  },
});
