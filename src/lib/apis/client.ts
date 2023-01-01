import axios from 'axios';

const token = localStorage.getItem('ACCESS_TOKEN') || '';

export const client = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  timeout: 3 * 1000,
  // headers: {
  //   'Content-Type': 'application/json',
  // Authorization: `Bearer ${localStorage.getItem(token)}`,
  // },
});
