import React, { useState, useEffect } from 'react';
import Card from './Card';
import ErrorPage from './ErrorPage';
const Data = (props) => {
    // console.log(`searchData from Data: ${props.searchQuery}`);
    const [data, setData] = useState(null);
    const [query, setQuery] = useState('india');
    const [category, setSelectedCategory] = useState('india');
    var apiCount = 0;
    var catghtData = false;
    const apiList = [
        'd163fb3c59a24f238da9f363eec31da7',
        '0826a8f43ff94f82ac59601609b0dd26',
        '7b23ea7a92324bcb9f92f23726c33dfb',
        'fde4c40e16bf4879a2b106ef62d2110b',
        '5f8d2f037fc74917aa0c5837d0676f42'
    ]
    useEffect(() => {
        const fetchApi = async () => {
            while (!catghtData) {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${props.searchQuery}&category=${props.newsCategory}&language=en&pageSize=100&sortBy=publishedAt&apiKey=7b23ea7a92324bcb9f92f23726c33dfb`)
                const apiData = await response.json();
                if (apiData.status == 'ok' || apiData.status == 'OK') {
                    setData(apiData);
                    break;
                }
                else {
                    apiCount++;
                    if (apiCount == apiList.length) {
                        return <ErrorPage />
                    }
                }
            }
        }
        fetchApi();
    }, [props])

    return (
        <>
            {
                (data != null ? (
                    data.articles.map((packet, index) => {
                        return (
                            <li key={packet.id} style={{ listStyleType: 'none' }} key={index}><Card key={index} heading={packet.title} description={packet.description} key={packet.id} date={packet.publishedAt} imgLink={packet.urlToImage} newsLink={packet.url} newsBy={packet.source.name} /></li>
                        )

                    })
                ) : (
                    null)
                )
            }

        </>
    );
}

export default Data
