//new arrival
function newArrival(){window.location.href = "new-arrival.html";}
//sale
function sale(){window.location.href = "sale.html";}

//mens section
function men(){window.location.href = "men.html";}
function shirtMen(){window.location.href = "men-tshirt.html";}
function jacketMen(){window.location.href = "men-jacket.html";}
function poloshirtMen() {window.location.href = "men-polo.html";}
function sportwearMen() {window.location.href = "men-sport-wear.html";}
function longleeveMen() {window.location.href = "men-long-sleeve.html";}


//women
function women(){window.location.href = "women.html";}
function sportswearWomen() {window.location.href = "women-sports-wear.html";}
function jacketWomen() {window.location.href = "women-jacket.html";}
function longsleeveW0men() {window.location.href = "women-long-sleeve.html";}
function casualWomen() {window.location.href = "women-casual.html";}
function shirtWomen() {window.location.href = "women-tshirt.html";}


//kids
function kids(){window.location.href = "kids.html";}
//boys section
function jacketBoy() {window.location.href = "kids-boys-jacket.html";}
function casualBoy() {window.location.href = "kids-boys-casual.html";}
function sportwearBoy() {window.location.href = "kids-boys-sports.html";}

//girls section
function jacketGirl() {window.location.href = "kids-girls-jacket.html";}
function casualGirl() {window.location.href = "kids-girls-casual.html";}
function sportswearGirl() {window.location.href = "kids-girls-sportswear.html";}

//baby section
function casualBaby() {window.location.href = "kids-baby-casual.html";}
function jacketBaby() {window.location.href = "kids-baby-jacket.html";}
function sportswearBaby() {window.location.href = "kids-baby-sportswear.html";}


//floating login
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var floatingbtn="<button class='open-button' onclick='openForm()''><i class='fa fa-user-o' aria-hidden='true'></i></button><div class='form-popup fadeIn' id='myForm'><div class='form-container'><p class='account-head'>John Doe</p><ul class='dashboard-list'><li class='dashbaord-item'><a class='dashbaord-item-nav' href='#'>Manage Account</a></li> <li class='dashbaord-item'><a class='dashbaord-item-nav' href='#'>My Wishlist</a></li> <li class='dashbaord-item'><a class='dashbaord-item-nav' href='voucher.html'>My Vouchers</a></li> <li class='dashbaord-item'><a class='dashbaord-item-nav' href='#'>Help Centre</a></li> <li class='dashbaord-item'><a class='dashbaord-item-nav' href='login.html'>Logout</a></li></ul><button type='button' class='btn cancel' onclick='closeForm()'>Close</button></div>";
document.write(floatingbtn);