import api from './api'

export const getAllFruits = async () => {
  const res = await api.get('/api/fruit/all');
  return res;
}

export const getFruitsInfoByNutritionValue = async nutritionId => {
  const res = await api.get(`/api/fruit/${nutritionId}?min=0&max=1000
  `);

  return res;
}
