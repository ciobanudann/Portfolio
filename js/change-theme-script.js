
let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light')
}else {
    setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode){
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'css/default.css';
    }
    else if (mode == 'dark') {
        document.getElementById('theme-style').href = 'css/blueTheme.css';
    }
    else if (mode == 'green') {
        document.getElementById('theme-style').href = 'css/greenTheme.css';
    }
    else if (mode == 'purple') {
        document.getElementById('theme-style').href = 'css/purpleTheme.css';
    }
    localStorage.setItem('theme', mode);
}
