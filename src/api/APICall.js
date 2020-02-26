const APICall = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts?userId=1';
    fetch(url).then(response => response.json()).then(data => {
        if (data.error_message) {
            throw new Error(data.error_message);
        }
        console.log('DATA: ', data);
        this.setState({ material: data.slice(0, 5) });
    }).then(null, error => {
        console.log(String(error))
        console.log(error)
    });
};

export default APICall
