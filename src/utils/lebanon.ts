export async function clickForPalestine()
{
    await fetch("https://arab.org/wp-admin/admin-ajax.php", {
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Requested-With": "XMLHttpRequest",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        },
        "referrer": "https://arab.org/click-to-help/palestine/",
        "body": "action=make_vote_action&button_id=9414&security=8badf3b869",
        "method": "POST",
        "mode": "cors"
    });
}