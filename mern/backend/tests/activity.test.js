test('API test', async () => {
    
    const API = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: { message: 'Success' }
        });
      }, 1000); 
    });
  
   
    const response = await API;
  
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Success');
  });
  