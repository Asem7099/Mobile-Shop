//Mobiles
function mob()
{
	window.location.href="Mobiles.html";
}

//Accessories
function acs()
{
	window.location.href="acs.html";
}
	
//Cart Page
	
	//cart box
	const iconShopping = document.querySelector('.iconShopping');
	const cartCloseBtn = document.querySelector('.CartClose');
	const cartBox = document.querySelector('.cartPage');
	iconShopping.addEventListener("click",function(){
		cartBox.classList.add('Open');
	});
	cartCloseBtn.addEventListener("click",function(){
		cartBox.classList.remove('Open');
	});

	
//add to cart
let items = [];
const cart=document.getElementsByClassName("cartBTN");
const cartPage = document.querySelector('.cartPage');
for(let i=0; i<cart.length; i++)
{
	cart[i].addEventListener("click" ,updateCart);

function updateCart(e)
{
	alert("Added to cart");	
	currentcart=e.target;
	fold=currentcart.parentElement;
	model=fold.getElementsByClassName("model")[0].innerText;
	img=fold.getElementsByClassName("img")[0].src;
	price=fold.getElementsByClassName("price")[0].innerText;
	//console.log(model)
	//console.log(img)
	//console.log(price)
	if(typeof(Storage) !== "undefined"){
    let item = {
                id:i+1,		
				model,
	            img,
	            price,
				no:1
	};
	if(JSON.parse(localStorage.getItem("items")) === null){
					items.push(item);
					localStorage.setItem("items",JSON.stringify(items));
					window.location.reload();
				}else{
					const localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data=>{
						if(item.id == data.id){
							item.no = data.no + 1;
						}else{
							items.push(data);
						}
					});
					items.push(item);
					localStorage.setItem("items",JSON.stringify(items));
					window.location.reload();
				}
			}else{
				alert("Error");
			}
}
let cb=document.getElementById("CartBuy");
//adding cartbox data in table

	 const CartPageTable = cartPage.querySelector('table');
     let TableData = '';
	 TableData += '<tr><th>Product ID</th><th>Product Name</th><th>Quantity</th><th>Product Price</th><th>Action</th></tr>';
	 if(JSON.parse(localStorage.getItem('items'))!== null){
            JSON.parse(localStorage.getItem('items')).map(data=>{
			TableData += '<tr><th>'+data.id+'</th><th>'+data.model+'</th><th>'+data.no+'</th><th>'+data.price+'</th> <th><a href="#" style="color:red" onclick=Delete(this);>Delete</a></th></tr>';
	        cb.style.visibility = "visible";
	 });}
	else{
		        cb.style.visibility = "hidden";
				TableData += '<tr><td colspan="5" style="color:red"><b>Cart is empty</b></td></tr>';
		        
		}
	    CartPageTable.innerHTML=TableData;
}


function buy()
{
	alert("Successful purchase"+"\n" +"Thank you for shopping at Mobile Shop" +"\n"
	+"\n"+"Stay home"+"\n"+"Stay Safe");
	localStorage.removeItem("items");
	window.location.reload();
	
}

		
		
//Links_Foldable
		function openZF2() {
        window.open("https://www.gsmarena.com/samsung_galaxy_z_fold2_5g-10342.php");
        }
	    function openMXS() {
        window.open("https://www.gsmarena.com/huawei_mate_xs-10098.php");
        }
		function openW() {
        window.open("https://www.gsmarena.com/lg_wing_5g-10442.php");
        }
		function openF() {
        window.open("https://www.gsmarena.com/samsung_galaxy_z_flip-10054.php");
        }
		function openD() {
        window.open("https://www.gsmarena.com/microsoft_surface_duo-10365.php");
        }
//Links_Samsung
		function openN20U() {
        window.open("https://www.gsmarena.com/samsung_galaxy_note20_ultra-10355.php");
        }
	    function openN20() {
        window.open("https://www.gsmarena.com/samsung_galaxy_note20-10338.php");
        }
		function openS20U() {
        window.open("https://www.gsmarena.com/samsung_galaxy_s20_ultra_5g-10040.php");
        }
		function openS20P() {
        window.open("https://www.gsmarena.com/samsung_galaxy_s20+-10080.php");
        }
		function openS20FE() {
        window.open("https://www.gsmarena.com/samsung_galaxy_s20_fe-10428.php");
        }
		function openN10P() {
        window.open("https://www.gsmarena.com/samsung_galaxy_note10+-9732.php");
        }
	    function openA71() {
        window.open("https://www.gsmarena.com/samsung_galaxy_a71-9995.php");
        }
		function openM51() {
        window.open("https://www.gsmarena.com/samsung_galaxy_m51-10148.php");
        }
		function openM31() {
        window.open("https://www.gsmarena.com/samsung_galaxy_m31-10079.php");
        }
		function openA21S() {
        window.open("https://www.gsmarena.com/samsung_galaxy_a21s-10239.php");
        }
//Links_Apple
		function open12PM() {
        window.open("https://www.gsmarena.com/apple_iphone_12_pro_max-10237.php");
        }
	    function open12P() {
        window.open("https://www.gsmarena.com/apple_iphone_12_pro-10508.php");
        }
		function open12() {
        window.open("https://www.gsmarena.com/apple_iphone_12-10509.php");
        }
		function open11PM() {
        window.open("https://www.gsmarena.com/apple_iphone_11_pro_max-9846.php");
        }
		function open11P() {
        window.open("https://www.gsmarena.com/apple_iphone_11_pro-9847.php");
        }
		function open11() {
        window.open("https://www.gsmarena.com/apple_iphone_11-9848.php");
        }
	    function openXR() {
        window.open("https://www.gsmarena.com/apple_iphone_xr-9320.php");
        }
		function openXSM() {
        window.open("https://www.gsmarena.com/apple_iphone_xs_max-9319.php");
        }
		function openXS() {
        window.open("https://www.gsmarena.com/apple_iphone_xs-9318.php");
        }
		function openSE() {
        window.open("https://www.gsmarena.com/apple_iphone_se_(2020)-10170.php");
        }
//Links_Huawei
		function openM40P() {
        window.open("https://www.gsmarena.com/huawei_mate_40_pro-10528.php");
        }
	    function openP40P() {
        window.open("https://www.gsmarena.com/huawei_p40_pro-10152.php");
        }
		function openN7P() {
        window.open("https://www.gsmarena.com/huawei_nova_7_pro_5g-10203.php");
        }
		function openN5T() {
        window.open("https://www.gsmarena.com/huawei_nova_5t-9803.php");
        }
		function openY9A() {
        window.open("https://www.gsmarena.com/huawei_y9a-10429.php");
        }
//Links_OnePlus
		function open8T() {
        window.open("https://www.gsmarena.com/oneplus_8t-10420.php");
        }
	    function open8P() {
        window.open("https://www.gsmarena.com/oneplus_8_pro-9919.php");
        }
		function open7T() {
        window.open("https://www.gsmarena.com/oneplus_7t-9816.php");
        }
		function open7P() {
        window.open("https://www.gsmarena.com/oneplus_7_pro-9689.php");
        }
		function openN() {
        window.open("https://www.gsmarena.com/oneplus_nord-10289.php");
        }
//Links_Oppo
		function openX2() {
        window.open("https://www.gsmarena.com/oppo_find_x2_pro-9529.php");
        }
	    function openR4P() {
        window.open("https://www.gsmarena.com/oppo_reno4_pro-10327.php");
        }
		function openR4() {
        window.open("https://www.gsmarena.com/oppo_reno4-10348.php");
        }
		function openA93() {
        window.open("https://www.gsmarena.com/oppo_a93-10431.php");
        }
		function openA73() {
        window.open("https://www.gsmarena.com/oppo_a73-10489.php");
        }
//Links_Xiaomi
		function openM11() {
        window.open("https://www.gsmarena.com/xiaomi_mi_11-10656.php");
        }
	    function openM10T() {
        window.open("https://www.gsmarena.com/xiaomi_mi_10t_5g-10473.php");
        }
		function openN10L() {
        window.open("https://www.gsmarena.com/xiaomi_mi_note_10_lite-10183.php");
        }
		function openN9P() {
        window.open("https://www.gsmarena.com/xiaomi_redmi_note_9_pro-10217.php");
        }
		function open9() {
        window.open("https://www.gsmarena.com/xiaomi_redmi_9-10233.php");
        }
//Links_Realme
		function openX3() {
        window.open("https://www.gsmarena.com/realme_x3_superzoom-10250.php");
        }
	    function openR7P() {
        window.open("https://www.gsmarena.com/realme_7_pro-10400.php");
        }
		function openR7() {
        window.open("https://www.gsmarena.com/realme_7_(asia)-10416.php");
        }
		function open6I() {
        window.open("https://www.gsmarena.com/realme_6i-10130.php");
        }
		function openC17() {
        window.open("https://www.gsmarena.com/realme_c17-10439.php");
        }
//Links_Nokia
		function openN9() {
        window.open("https://www.gsmarena.com/nokia_9_pureview-8867.php");
        }
	    function open8() {
        window.open("https://www.gsmarena.com/nokia_8_3_5g-10142.php");
        }
		function open7() {
        window.open("https://www.gsmarena.com/nokia_7_3-10468.php");
        }
		function open5() {
        window.open("https://www.gsmarena.com/nokia_5_3-10117.php");
        }
		function open1() {
        window.open("https://www.gsmarena.com/nokia_1_plus-9538.php");
        }

//Links_Acs
		function openAM() {
        window.open("https://www.apple.com/eg-ar/airpods-max/");
        }
	    function openAP() {
        window.open("https://www.apple.com/eg-ar/airpods-pro/");
        }
		function openAP2() {
        window.open("https://www.apple.com/eg-ar/airpods-2nd-generation/specs/");
        }
		function openSB() {
        window.open("https://www.samsung.com/eg/audio-sound/galaxy-buds/galaxy-buds-live-mystic-bronze-sm-r180nznamea/p");
        }
		function openSBP() {
        window.open("https://www.gsmarena.com/nokia_1_plus-9538.php");
        }
		function openHF3() {
        window.open("https://consumer.huawei.com/en/headphones/freebuds3/");
        }
	    function openHFL() {
        window.open("https://consumer.huawei.com/eg/audio/freebuds-lite/");
        }
		function openAW6() {
        window.open("https://www.gsmarena.com/apple_watch_series_6-10448.php");
        }
		function openAW5() {
        window.open("https://www.gsmarena.com/apple_watch_series_5-9859.php");
        }
		function openSW() {
        window.open("https://www.gsmarena.com/samsung_galaxy_watch3-10315.php");
        }
        function openHW() {
        window.open("https://www.gsmarena.com/huawei_watch_gt_2_porsche_design-10554.php");
        }
	    function openHOW() {
        window.open("https://www.gsmarena.com/honor_magicwatch_2-9974.php");
        }
		function openHWF() {
        window.open("https://www.gsmarena.com/huawei_watch_fit-10427.php");
        }
		function openMB() {
        window.open("https://www.mi.com/global/mi-smart-band-5/");
        }
		function openHB() {
        window.open("https://www.hihonor.com/eg/products/wearables/honorband5/");
        }

        
		
		
		
		
		
		
		
		
		
		
		
		