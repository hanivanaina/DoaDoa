class DataSource {
    static searchDoa (keyword) {
        return fetch(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.doa) {
            return Promise.resolve(responseJson.doa);
          } else {
            return Promise.reject(`${keyword} tidak ditemukan`);
          }
        });
    }
}

export default DataSource;