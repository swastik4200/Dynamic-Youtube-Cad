function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    document.querySelector(".duration").innerHTML = duration;
    document.querySelector(".title").innerHTML = title;
    if (views >= 1000000) views = views / 1000000 + "M";
    else if (views >= 1000) views = views / 1000 + "K";

    document.querySelector(".details").innerHTML = cName + " . " + views + " views . " + monthsOld + " months ago";
    document.querySelector(".image").src = thumbnail;
}
createCard("Peeeee Dablu | Slowed&Reverb", "Daily Drama Exclusive", 1600000, 7, " 5:09 ",
    "https://i.ytimg.com/vi/XXzRQnlZJ-Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD21k6TRjfLXl6ZLYS1oKfvRxPlCQ"); 