var i = 0;
    const id1 = document.getElementById("imp_logo");
    const id2 = document.getElementById("assures_logo");
    const id3 = document.getElementById("it_logo");
    const id4 = document.getElementById("it_lo");
    const id5 = document.getElementById("box");
    
    const h1Text = document.getElementById("h1--text");
    const h2Text = document.getElementById("h2--text");
    const pText = document.getElementById("p--text");
    const aLink = document.getElementById("a--link");
    
    const h1Array = ["Say Hello to Our IMPEX", "Say Hello to CriO Assured", "Say Hello to Artificial CriO", "Say Hello to VFM Brand"];
    const h2Array = ["Redefining the import-export industry", "Assuring the after-purchased services", "Customizability in a way never imagined", "A brand in a value for money mission"];
    const pArray = ["Import-export industry is totally non-organized and we are on a mission to make it organized. Till now we have more than 50 retail partners spread over 3 districts of West Bengal, 6 online marketplaces and working with 5 brands.",
                    "CriO Assured is a programme by CriO Family to provide users a way to verify the origin, genuineness, care instruction and other essential things about a product and to be assured that what they are getting is totally value for money.",
                    "An IT company dedicated to delivering customized IT services to users also fills the world with IT products filled with remarkable problem-solving abilities delivered with creativity overloaded. Visit our website for more info.",
                    "VFM stands for value for money. A garment brand dedicated towards full filling the dream of D2C. With VFM we are willing to provide medium quality garments with the most reasonable price possible starting with 100% cotton tshirts."];
    const aArray = ["/impex", "/assured", "https://crioit.com", "/vfm"];
    function increasei() {
        if(i == 3) {
            if(id1.classList.contains("class2")) {
                id1.classList.remove("class2");
            } if(id1.classList.contains("class4")) {
                id1.classList.remove("class4");
            }
            id1.classList.add("class1");
           if(id2.classList.contains("class1")) {
                id2.classList.remove("class1");
            } if(id2.classList.contains("class3")) {
                id2.classList.remove("class3");
            }
            id2.classList.add("class2");
            if(id3.classList.contains("class2")) {
                id3.classList.remove("class2");
            } if(id3.classList.contains("class4")) {
                id3.classList.remove("class4");
            }
            id3.classList.add("class3");
            if(id4.classList.contains("class1")) {
                id4.classList.remove("class1");
            } if(id4.classList.contains("class3")) {
                id4.classList.remove("class3");
            }
            id4.classList.add("class4");
        } else if(i == 0) {
            if(id2.classList.contains("class2")) {
                id2.classList.remove("class2");
            } if(id2.classList.contains("class4")) {
                id2.classList.remove("class4");
            }
            id2.classList.add("class1");
            if(id3.classList.contains("class1")) {
                id3.classList.remove("class1");
            } if(id3.classList.contains("class3")) {
                id3.classList.remove("class3");
            }
            id3.classList.add("class2");
            if(id4.classList.contains("class2")) {
                id4.classList.remove("class2");
            } if(id4.classList.contains("class4")) {
                id4.classList.remove("class4");
            }
            id4.classList.add("class3");
            if(id1.classList.contains("class1")) {
                id1.classList.remove("class1");
            } if(id1.classList.contains("class3")) {
                id1.classList.remove("class3");
            }
            id1.classList.add("class4");
        } else if(i == 1) {
            if(id3.classList.contains("class2")) {
                id3.classList.remove("class2");
            } if(id3.classList.contains("class4")) {
                id3.classList.remove("class4");
            }
            id3.classList.add("class1");
            if(id4.classList.contains("class1")) {
                id4.classList.remove("class1");
            } if(id4.classList.contains("class3")) {
                id4.classList.remove("class3");
            }
            id4.classList.add("class2");
            if(id1.classList.contains("class2")) {
                id1.classList.remove("class2");
            } if(id1.classList.contains("class4")) {
                id1.classList.remove("class4");
            }
            id1.classList.add("class3");
            if(id2.classList.contains("class1")) {
                id2.classList.remove("class1");
            } if(id2.classList.contains("class3")) {
                id2.classList.remove("class3");
            }
            id2.classList.add("class4");
        } else if(i == 2) {
            if(id4.classList.contains("class2")) {
                id4.classList.remove("class2");
            } if(id4.classList.contains("class4")) {
                id4.classList.remove("class4");
            }
            id4.classList.add("class1");
            if(id1.classList.contains("class1")) {
                id1.classList.remove("class1");
            } if(id1.classList.contains("class3")) {
                id1.classList.remove("class3");
            }
            id1.classList.add("class2");
            if(id2.classList.contains("class2")) {
                id2.classList.remove("class2");
            } if(id2.classList.contains("class4")) {
                id2.classList.remove("class4");
            }
            id2.classList.add("class3");
            if(id3.classList.contains("class1")) {
                id3.classList.remove("class1");
            } if(id3.classList.contains("class3")) {
                id3.classList.remove("class3");
            }
            id3.classList.add("class4");
        }
        if(i >= 3) {
            i = 0;
        } else {
            i++;
        }
        aLink.setAttribute("href", aArray[i]);
        h1Text.classList.remove("text__post");
        h1Text.classList.add("h1--text__pre");
        h2Text.classList.remove("text__post");
        h2Text.classList.add("h2--text__pre");
        pText.classList.remove("text__post");
        pText.classList.add("p--text__pre");
        setTimeout(addclass, 400);
    } function decreasei() {
        if(i == 1) {
            if(id1.classList.contains("class2")) {
                id1.classList.remove("class2");
            } if(id1.classList.contains("class4")) {
                id1.classList.remove("class4");
            }
            id1.classList.add("class1");
           if(id2.classList.contains("class1")) {
                id2.classList.remove("class1");
            } if(id2.classList.contains("class3")) {
                id2.classList.remove("class3");
            }
            id2.classList.add("class2");
            if(id3.classList.contains("class2")) {
                id3.classList.remove("class2");
            } if(id3.classList.contains("class4")) {
                id3.classList.remove("class4");
            }
            id3.classList.add("class3");
            if(id4.classList.contains("class1")) {
                id4.classList.remove("class1");
            } if(id4.classList.contains("class3")) {
                id4.classList.remove("class3");
            }
            id4.classList.add("class4");
        } else if(i == 2) {
            if(id2.classList.contains("class2")) {
                id2.classList.remove("class2");
            } if(id2.classList.contains("class4")) {
                id2.classList.remove("class4");
            }
            id2.classList.add("class1");
            if(id3.classList.contains("class1")) {
                id3.classList.remove("class1");
            } if(id3.classList.contains("class3")) {
                id3.classList.remove("class3");
            }
            id3.classList.add("class2");
            if(id4.classList.contains("class2")) {
                id4.classList.remove("class2");
            } if(id4.classList.contains("class4")) {
                id4.classList.remove("class4");
            }
            id4.classList.add("class3");
            if(id1.classList.contains("class1")) {
                id1.classList.remove("class1");
            } if(id1.classList.contains("class3")) {
                id1.classList.remove("class3");
            }
            id1.classList.add("class4");
        } else if(i == 3) {
            if(id3.classList.contains("class2")) {
                id3.classList.remove("class2");
            } if(id3.classList.contains("class4")) {
                id3.classList.remove("class4");
            }
            id3.classList.add("class1");
            if(id4.classList.contains("class1")) {
                id4.classList.remove("class1");
            } if(id4.classList.contains("class3")) {
                id4.classList.remove("class3");
            }
            id4.classList.add("class2");
            if(id1.classList.contains("class2")) {
                id1.classList.remove("class2");
            } if(id1.classList.contains("class4")) {
                id1.classList.remove("class4");
            }
            id1.classList.add("class3");
            if(id2.classList.contains("class1")) {
                id2.classList.remove("class1");
            } if(id2.classList.contains("class3")) {
                id2.classList.remove("class3");
            }
            id2.classList.add("class4");
        } else if(i == 0) {
            if(id4.classList.contains("class2")) {
                id4.classList.remove("class2");
            } if(id4.classList.contains("class4")) {
                id4.classList.remove("class4");
            }
            id4.classList.add("class1");
            if(id1.classList.contains("class1")) {
                id1.classList.remove("class1");
            } if(id1.classList.contains("class3")) {
                id1.classList.remove("class3");
            }
            id1.classList.add("class2");
            if(id2.classList.contains("class2")) {
                id2.classList.remove("class2");
            } if(id2.classList.contains("class4")) {
                id2.classList.remove("class4");
            }
            id2.classList.add("class3");
            if(id3.classList.contains("class1")) {
                id3.classList.remove("class1");
            } if(id3.classList.contains("class3")) {
                id3.classList.remove("class3");
            }
            id3.classList.add("class4");
        }
        if(i <= 0) {
            i = 3;
        } else {
            i--;
        }
        aLink.setAttribute("href", aArray[i]);
        h1Text.classList.remove("text__post");
        h1Text.classList.add("h1--text__pre");
        h2Text.classList.remove("text__post");
        h2Text.classList.add("h2--text__pre");
        pText.classList.remove("text__post");
        pText.classList.add("p--text__pre");
        setTimeout(addclass, 400);
    }
    function addclass() {
        h1Text.classList.add("text__post");
        h2Text.classList.add("text__post");
        pText.classList.add("text__post");
        h1Text.innerText = h1Array[i];
        h2Text.innerText = h2Array[i];
        pText.innerText = pArray[i];
    }