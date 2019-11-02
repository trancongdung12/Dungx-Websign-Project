var id = 0;
var data = {
    sell: [{
            id: ++id,
            image: "image/rooms/2.jpg",
            name: "Country Style House with beautiful garden and terrace",
            location: "101b",
            size: 1024,
            bed: 5,
            bath: 2,
            gara: 2,
            price: 23400

        },
        {
            id: ++id,
            image: "image/rooms/3.jpg",
            name: "Country Style House with beautiful garden and terrace",
            location: "102b",
            size: 1224,
            bed: 5,
            bath: 2,
            gara: 2,
            price: 23450

        },
        {
            id: ++id,
            image: "image/rooms/4.jpg",
            name: "Country Style House with beautiful garden and terrace",
            location: "103b",
            size: 1224,
            bed: 5,
            bath: 2,
            gara: 2,
            price: 23450

        },
        {
            id: ++id,
            image: "image/rooms/4.jpg",
            name: "Country Style House with beautiful garden and terrace",
            location: "104b",
            size: 1224,
            bed: 5,
            bath: 2,
            gara: 2,
            price: 23450

        },
        {
            id: ++id,
            image: "image/rooms/5.jpg",
            name: "Country Style House with beautiful garden and terrace",
            location: "105b",
            size: 1224,
            bed: 5,
            bath: 2,
            gara: 2,
            price: 23450

        }, {
            id: ++id,
            image: "image/rooms/1.jpg",
            name: "Country Style House with beautiful garden and terrace",
            location: "106b",
            size: 1224,
            bed: 5,
            bath: 2,
            gara: 2,
            price: 23450

        }


    ]
}

localStorage.setItem('session', JSON.stringify(data.sell));
localStorage.setItem('sessionIndex', JSON.stringify(data.index));

function loadSell() {
    document.getElementById('rowSearch').style.display = "block";
    document.getElementById('row').style.display = "flex";
    document.getElementById('headerPro').style.display = "none";
    document.getElementById('sectionPro').style.display = "none";
    // debugger;
    var localSell = JSON.parse(localStorage.getItem('session'));
    // if (localStorage == null) {
    //     localSell = localStorage.setItem('sessionA', JSON.stringify(data.sell));
    // }

    console.log(localStorage.getItem('session'));
    console.log(localSell.length);

    for (let i = 0; i < localSell.length; i++) {
        var row = '<div class="col-lg-4 col-md-6"><div class="room-items"><div class="room-img">';
        row += '<img src="' + localSell[i].image + '" alt="">';
        row += '<a class="room-content"><i id="heart' + i + '" ondblclick= "heartWhite(' + i + ')" onclick="heart(' + i + ')" style="color: white;" class="far fa-heart"></i> </a> </div>';
        row += '<div class="room-text"><div class="room-details"> <div class="room-title">';
        row += '<h5>' + localSell[i].name + '</h5>';
        row += '<a href="#"><i class="fas fa-map-marker-alt fa-xs"></i> <span>Location</span></a>';
        row += '<a href="' + localSell[i].location + '" class="large-width"><i class="fas fa-location-arrow fa-xs"></i> <span>Show on Map</span></a>';
        row += '</div></div><div class="room-features"><div class="room-info"> <div class="size"><p>Lot Size</p><img src="image/rooms/size.png" alt="">';
        row += '<span>' + localSell[i].size + '</span><span> sqft</span></div>';
        row += '<div class="beds"><p>Beds</p><img src="image/rooms/bed.png" alt=""><span>' + localSell[i].bed + '</span> </div>';
        row += '<div class="baths"> <p>Baths</p><img src="image/rooms/bath.png" alt=""> <span>' + localSell[i].bath + '</span> </div>';
        row += '<div class="garage"><p>Garage</p><img src="image/rooms/garage.png" alt=""><span>' + localSell[i].gara + '</span> </div> </div> </div>';
        row += '<div class="room-price"><p>For Sale</p><span>$</span><span>' + localSell[i].price + '</span> </div>';
        row += '<button class="btn"> <a  onclick="displayProperty(' + i + ')" style="text-decoration: none;">View Property</a></button></div></div> </div>';
        document.getElementById('row').innerHTML += row;
    }
}


// function getIndex(i) {
//     alert(i);
//     tam = i;
// }



function heart(i) {

    for (var j = 0; j < data.sell.length; j++) {
        if (j == i) {
            document.getElementById('heart' + i).style.color = "red";
        }

    }

}

function heartWhite(i) {

    for (var j = 0; j < data.sell.length; j++) {
        if (j == i) {
            document.getElementById('heart' + i).style.color = "white";
        }

    }

}


function checkFluency() {
    var checkbox = document.getElementById('my-input1');
    if (checkbox.checked == true) {
        document.getElementById('textAgrre').innerHTML = "If you have money you can buy every thing";
    } else {
        document.getElementById('textAgrre').innerHTML = "";
    }
}

function addHouse(x) {
    var name = document.getElementById('name').value;
    var location = document.getElementById('location').value;
    var price = document.getElementById('price').value;
    var image1 = document.getElementById('image').value;
    var image = "image/" + image1.split('\\')[2];
    alert(image);
    var size = document.getElementById('size').value;
    var bed = document.getElementById('bed').value;
    var bath = document.getElementById('bath').value;
    var gara = document.getElementById('gara').value;

    if (x == 'sell') {

        data.sell.push({ id: ++id, image: image, name: name, location: location, size: size, bed: bed, bath: bath, gara: gara, price: price })

        localStorage.setItem('sessionA', JSON.stringify(data.sell));
    }
    console.log(data.sell);


}


function displayProperty(x) {
    document.getElementById('rowSearch').style.display = "none";
    document.getElementById('row').style.display = "none";
    document.getElementById('headerPro').style.display = "block";
    document.getElementById('sectionPro').style.display = "block";
    // var x = getIndex(a);
    var localSell = JSON.parse(localStorage.getItem('session'));
    alert(x);
    for (let i = 0; i < localSell.length; i++) {
        if (x == i) {
            var row = '<div class="container"><div class="row spad-p"><div class="col-lg-12"><div class="property-title">';
            row += '<h3>' + localSell[i].name + '</h3>';
            row += '<a href="#">' + localSell[i].location + '</a>';
            row += '</div><div class="property-price"><p>For Sale</p><span>$' + localSell[i].price + '</span>';
            row += '</div></div></div><div class="row"><div class="col-lg-12"><div class="property-img owl-carousel"><div class="single-img">';
            row += '<img src="' + localSell[i].image + '" alt="">';
            row += '</div></div></div></div></div>';
            document.getElementById('headerPro').innerHTML += row;
        }


    }

    for (let i = 0; i < localSell.length; i++) {
        if (x == i) {
            var row = '<div class="row sp-40 spt-40"><div class="col-lg-8"><div class="p-ins"><div class="row details-top"><div class="col-lg-12"><div class="t-details">';
            row += '<div class="register-id"><p>Registered ID: <span>0D05426FF1</span></p><button class="btn btn-outline-success">Buy Now</button></div>';
            row += '<div id="property-size" class="popular-room-features single-property"><div class="size"><p>Lot Size</p><img src="image/rooms/size.png" alt="">';
            row += '<span>' + localSell[i].size + ' sqft</span></div><div class="beds"><p>Beds</p><img src="image/rooms/bed.png" alt="">';
            row += '<span>' + localSell[i].bed + '</span></div><div class="baths"><p>Baths</p><img src="image/rooms/bath.png" alt="">';
            row += '<span>' + localSell[i].bath + '</span></div><div class="garage"><p>Garage</p><img src="image/rooms/garage.png" alt="">';
            row += '<span>' + localSell[i].gara + '</span></div></div></div></div></div>';
            row += '<div class="row"><div class="col-lg-12"><div class="property-description"><h4>Description</h4>';
            row += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in justo elementum,fermentum justo ac, rutrum erat. Aenean ut malesuada diam. Proin bibendum sapien sodales, convallis dolor facilisis, ultricies nisl.Sed malesuada nibh sed velit ultricies, id varius lacus feugiat. Aenean vestibulum, nisl eget accumsan aliquam, magna diam convallis risus, in tristique metus sem eu tortor. Cras leo libero, fermentum quis aliquamet, tincidunt at dolor. </p>';
            row += '</div><div class="location-map"><h4>Location</h4>';
            row += '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.112367473981!2d108.23931351416975!3d16.0596577439617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177e16d75991%3A0x711c915f162f6505!2zMTAxQiBMw6ogSOG7r3UgVHLDoWMsIEFuIEjhuqNpIMSQw7RuZywgU8ahbiBUcsOgLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2sjp!4v1572435839670!5m2!1svi!2sjp"width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';
            row += '</div></div></div></div></div><div class="col-lg-4"><div class="row pb-30"><div class="col-lg-12"><div class="contact-service"><img src="image/avatar.png" alt="">';
            row += '<p>Real Estate by</p><h5>DUNGX</h5><table><tr><td>Office : <span>1-139-954-3228</span></td></tr><tr><td>Mobile : <span>1-517-328-7751</span></td></tr>';
            row += '<tr><td>Fax : <span>1-458-284-9871</span></td></tr><tr><td>WhatsApp : <span>1-812-117-2663</span></td></tr><tr><td>Email : <span>trancongdung12@gmail.com</span></td>';
            row += '</tr><tr><td class="abc"><button class="btn btn-outline-success">CONTACT</button></td></tr></table></div></div></div></div></div>';
            document.getElementById('sectionPro').innerHTML += row;
        }

    }

}