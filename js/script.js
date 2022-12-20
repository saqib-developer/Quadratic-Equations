function solution() {
    document.getElementById("lines").style.display = "block";

    const val1 = document.createElement("span");
    const val2 = document.createElement("span");
    const val3 = document.createElement("span");
    const val4 = document.createElement("span");

    const l1 = document.getElementById("l1");
    const l3 = document.getElementById("l3");

    let a = Number(document.getElementById("vala").value);
    let b = Number(document.getElementById("valb").value);
    let c = Number(document.getElementById("valc").value);

    val1.appendChild(document.createTextNode(a.toString()));
    val2.appendChild(document.createTextNode(display(b)));
    val3.appendChild(document.createTextNode(display(c)));

    l1.insertBefore(val1, l1.children[0]);
    l1.insertBefore(val2, l1.children[2]);
    l1.insertBefore(val3, l1.children[4]);


    if (a !== 0) {
        val4.appendChild(document.createTextNode(display(-b)));

        l3.insertBefore(val4, l3.children[1]);
        l3.insertBefore(val2, l3.children[3]);
        l3.insertBefore(val1, l3.children[5]);
        l3.insertBefore(val3, l3.children[7]);
        l3.insertBefore(val1, l3.children[9]);

        // L3.text = "" + (-b) + "" + b + "" + a + "" + c + "" + a;

        // if ((-4 * a * c) >= 0) {
        //   s1 = "+" + (-4 * a * c);
        // } else {
        //   s1 = (-4 * a * c) + "";
        // }
        // L4.gameObject.SetActive(true);
        // L4.text = "x = (" + (-b) + " ± √" + (b * b) + " " + s1 + ") / " + 2 * a;
        // L5.gameObject.SetActive(true);
        // L5.text = "x = (" + (-b) + " ± √" + ((b * b) + (-4 * a * c)) + ") / " + 2 * a;
        // if (((b * b) - (4 * a * c)) >= 0) {
        //   // float sqrt1 = Mathf.Sqrt((b * b) - (4 * a * c));

        //   L6.gameObject.SetActive(true);
        //   L6.text = "x = (" + (-b) + " ± " + sqrt1 + ") / " + 2 * a;
        //   L7.gameObject.SetActive(true);
        //   L7.text = "x = (" + (-b) + " + " + sqrt1 + ") / " + 2 * a + "               " + "x = (" + (-b) + " - " + sqrt1 + ") / " + 2 * a;
        //   L8.gameObject.SetActive(true);
        //   L8.text = "x = " + ((-b) + sqrt1) + " / " + 2 * a + "                       " + "x = " + ((-b) - sqrt1) + " / " + 2 * a;
        //   L9.gameObject.SetActive(true);
        //   L9.text = "x = " + (Mathf.Round(((-b + sqrt1) / (2 * a)) * 1000) / 1000) + "                           " + "x = " + (Mathf.Round(((-b - sqrt1) / (2 * a)) * 1000) / 1000);
        // }
    } else {
        // LinearEquation(a, b, c);
    }

}
function display(value) {
    let valueString;
    if (value < 0) {
        valueString = value.toString();
    } else {
        valueString = "+" + value.toString();
    }
    return valueString;
}
////////////////////////////////////////commetns section////////////////////////////////

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (document.getElementById("name").value.length !== 0 && document.getElementById("comment").value.length !== 0) {
            let comment = document.createElement("div");
            comment.setAttribute('class', 'percomment');

            let profile_pic = document.createElement("img");
            profile_pic.setAttribute('src', 'img/profile pic.png');

            let span_div = document.createElement("div");

            const comm_text = document.createElement("span");
            const comm = document.createTextNode(document.getElementById("comment").value);

            const name_text = document.createElement("span");
            name_text.setAttribute('class', 'name');
            const name = document.createTextNode(document.getElementById("name").value);
            name_text.appendChild(name);
            comm_text.appendChild(comm);

            span_div.appendChild(name_text);
            span_div.appendChild(comm_text);

            comment.appendChild(profile_pic);
            comment.appendChild(span_div);
            document.getElementById("percommentssss").appendChild(comment);
            document.getElementById("comment").value = '';
            document.getElementById("name").value = '';
        } else {
            alert("Please enter a name and some comment");
        }

    }
}, false);