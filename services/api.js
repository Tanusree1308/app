const API_URL = 'http://192.168.137.1:3000/items';

// Fetch all items
export const getItems = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error('Error fetching items:', error);
  }
};

// Add new item
export const addItem = async (name) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error adding item:', error);
  }
};

// Edit item
export const editItem = async (id, name) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error editing item:', error);
  }
};

// Delete item
export const deleteItem = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  } catch (error) {
    console.error('Error deleting item:', error);
  }
};
