
// getting al the needed package to run
const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')


// Use the function with the try method to report on erros (Defensive programming)
newsr.get('/',async(req,res)=>{

    try { 
        
        // I tried hiding my api key using the.env method , however the whole program fails to load
        //    console.log(process.env)
        // var url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey=process.env.APIkey';

        var url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey=cdbb6d12fa974387aa6ea5f380b7d729';
        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            // Now the error will be printed
            console.log(error)
        }

    }
})

// Creating a seperate function for search purposes
newsr.post('/search',async(req,res)=>{
    const search=req.body.search
    //console.log(req.body.search)


    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=36f3e29b704f41339af8439dc1228334`

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})





    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

// This is another error handeling method below for the category section of things.
newsr.get('/news/:category',async(req,res)=>{
    var category = req.params.category;
    try {
        var url = 'http://newsapi.org/v2/top-headlines?country=in&category=' + category + '&apiKey=cdbb6d12fa974387aa6ea5f380b7d729';

        const news_get =await axios.get(url)
        res.render('category',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

module.exports=newsr