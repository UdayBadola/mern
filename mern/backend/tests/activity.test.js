test('fake API test', async () => {
    // Simulate making an API request (but don't actually do it)
    const API = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: { message: 'Success' }
        });
      }, 1000); // Simulating 1-second network delay
    });
  
    // "Await" the fake API response
    const response = await API;
  
    // Simulate assertions for the fake API response
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Success');
  });
  