class Vimeo {
    constructor() {
         $('#loadingImg').hide();
        fetch('vimeo.json').then(response => response.json())
            .then(data => {
                this.json_data = data;
                this.render();
            }).catch(e => $('#loadingImg').show());
    }

    render() {
        var container = document.getElementById('container');
        this.json_data.forEach(function(video) {
            var code = document.createElement('div');
            if(!video.stats_number_of_comments){
                video.stats_number_of_comments = "N/A"
            }
            if(!video.stats_number_of_plays){
                video.stats_number_of_plays = "N/A"
            }
            if(!video.stats_number_of_likes){
                video.stats_number_of_likes = "N/A"
            }
            
            code.setAttribute('class', 'video');
            code.innerHTML = `
                <a href="${video.url}" target="_blank"><img class="image" href="${video.url}" src="${video.thumbnail_large}"></img></a>

                <div class="description">
                    <div class="title" >
                        <a href="${video.url}" target="_blank">
                            ${video.title}
                        </a>
                    </div>
                    <div class="user">
                        <img class="user_thumb" src="${video.user_portrait_huge}">
                        <a href="${video.user_url}">
                            <span class="username">${video.user_name}</span>
                        </a>
                    </div>
                    <div class="wrapper">
                    <table class="table table-bordered">
                      <thead>
                        <tr class="active">
                          <th>Plays</th>
                          <th>Likes</th>
                          <th>Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>${video.stats_number_of_plays}</td>
                          <td>${video.stats_number_of_likes}</td>
                          <td>${video.stats_number_of_comments}</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
                </div>`
            container.appendChild(code);
        });
    }
}

window.onload = function(){ new Vimeo(); }
