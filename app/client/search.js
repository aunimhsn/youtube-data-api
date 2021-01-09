const API_KEY = 'AIzaSyAevHpYd7Hijsuf34ecXQUSWEIxTMq_dqA';
const PROXY = 'https://cors-anywhere.herokuapp.com';

window.youtubeSearch = () => {
    return {
        videos: [],
        newSearch: '',

        search() {
            this.videos = [];

            let url = new URL("https://youtube.googleapis.com/youtube/v3/search");
            let params = {
                            part: 'snippet', 
                            maxResults: 3,
                            q: this.newSearch,
                            key: API_KEY,
                         };
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.videos = data.items;
                }); 
        },

        formatDate(date) {
            return date.substring(0, 8);
        }
    }
}
