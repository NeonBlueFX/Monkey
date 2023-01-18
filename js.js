const aSmile = confirm("Esta sonriendo el mono");
const bSmile = confirm("Esta sonriendo el mono");;


if (aSmile == true)
{
    document.getElementById("monoa").src = "images.png"
}
else
{
    document.getElementById("monoa").src = "trite.png"

}

if (bSmile == true)
{
    document.getElementById("monob").src = "images.png"
}
else
{
    document.getElementById("monob").src = "trite.png"

}

if (aSmile&&bSmile || !aSmile&&!bSmile)
{
    document.getElementById("result").src = "morir.jpg"
}
else
{
    document.getElementById("result").src = "ta-bien.jpg"
}