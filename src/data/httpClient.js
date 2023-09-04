const API = "https://api.themoviedb.org/";
export function get(path){
    return fetch(API+path,{
        headers: {
            Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWI0ZWQxYmQwOTM1MzE4OWE2ZDMxMGVlNzkyNzY1NyIsInN1YiI6IjY0ZjU1OGRmN2Q0MWFhMDBlMThhYTEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SPictiY9VBnt_tE0gMAQ49OOfH2j5lfva15N0mUyipU",
            "Content-type": "application/json;charsert=utf-8"
        }
    }).then((result) => result.json())
}