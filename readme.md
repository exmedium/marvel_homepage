My appologies on the timeframe,  
I'm not as familiar with trying to get information through a series of calls to an api,  
that we don't control, I'm more accustomed to writing an api endpoint (in Php) that returns the data that I want to ingest, in JSON that is easily parsed/contains no cruft.  
  
All of this is to say, I ran into an issue with sending further requests:  
{  
  "code": "RequestThrottled",  
  "message": "You have exceeded your rate limit.  Please try again later."  
}  
So until that limit has passed, I can't test further.  

As such there are several sections that should run for anyone who hasn't hit the data cap.  
Specifically, the requests in ComicList.jsx, and Comic.jsx should return as expected.  
  
I've left in some commented hard coding for the purpose of checking the layout should there be a further problem with the number of requests, but I believ I should have it fixed.  

To test this you will need a developer account here:
https://developer.marvel.com/

And you will need to create a new .env.local in the root dir, with the keys:  
NEXT_PUBLIC_MARVEL_PRIVATE_KEY=<your private key>  
NEXT_PUBLIC_MARVEL_PUBLIC_KEY=<your public key>  
  
Thank you for your time, and consideration.  
It is my hope that:  
1. You will take into account the work that actually was done, and its responsivness.  
2. You will see that I was heading in the correct direction to deal with the API.  
3. You will allow that the timeframe was a bit short for the task.
4. You will forgive that I didn't create a "news section" as it would be much the same as the other sections,  
   save that it would need to be hard coded, as I'm not seeing a news api.  

I've for the moment, run out of time to work on this,  
so I'm going to leave it in an as is state until I have time to revise,  
either for your use, or my own edification.  
  
Thanks,  
_________john
