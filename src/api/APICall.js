import React from 'react'

const APICall = () => {
    console.log('getAllPosts');
    axios({
        method: 'get',
        url: 'http://10.51.1.23:5000/posts'
    })
        .then(res => {
            console.log('RESPONSE: ', res);
            console.log('DATA: ', res.data);
            this.setState({ posts: res.data });
        })
        .catch(err => {
            console.log('ERROR: ', err);
        });
};

export default APICall