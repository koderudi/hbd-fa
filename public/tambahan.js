/* 
17 Oktober 2024 By Rudi Prasetyo

"Jika kita menganggap selingkuh sebagai bagian dari seleksi saat pacaran, kita sedang membenarkan perilaku yang merusak sejak awal. Bagaimana mungkin sebuah hubungan bisa berkembang dengan sehat jika sejak awal dibangun di atas dasar pengkhianatan? Memilih untuk belajar dari kejujuran, komitmen, dan integritas akan menghasilkan hubungan yang penuh dengan kepercayaan dan saling menghormati." ~ Mas R


/////////////////////

zahra, terimakasih ya sudah cinta dan sayang padaku. 
aku mendengar dengan jelas bahwa tadi kamu mengucapkan ingin berubah menjadi zahra yang dulu "tanpa aku" 

Saat hujan turun, butiran air menari di atas kaca jendela, seolah ikut merasakan apa yang tengah berkecamuk di hatiku. Aku termenung di balik jendela, hingga tiba-tiba aku merasakan sentuhan lembut di pundakku. Ibu, dengan senyum hangat yang tak pernah pudar, berbisik, "Jangan berlarut dalam kesedihan, Dek."

Ia kemudian memelukku erat, seakan ingin menarik semua beban dari dadaku. Dengan perlahan, aku mulai menceritakan segala yang membebaniku, tentang luka, kecewa, dan rasa sakit yang tak terungkapkan. Ibu mendengarkan tanpa menyela, hanya sesekali mengusap punggungku dengan lembut.

Setelah semuanya terucap, ibu memandangku dan berpesan dengan suara yang begitu lirih, "Jangan pernah dendam ya, Dek. Kifarah itu benar dan nyata. Seperti buah yang busuk, ia akan jatuh dengan sendirinya. Begitu juga dengan orang yang berhati busuk, suatu hari nanti, mereka juga akan jatuh tanpa kita perlu melakukan apa-apa."

*/


const messages = [
            "1. Semoga selalu diberi kebahagiaan dan kesehatan.",
            "2. Semoga segala cita-citanya tercapai.",
            "3. Setia pada satu lelaki",
            "4. Semoga semakin sukses dan diberkahi.",
            "5. Semoga selalu dalam lindungan-Nya.",
            "6. Semoga panjang umur dan sehat selalu.",
            "7. Semoga bisa menjadi pribadi yang lebih baik.",
            "Semoga dilancarkan rezekimu, jangan berlarut larut sedihnya ya. ~Mas R",
            "Panjang umur nak, ibuk gak lali kok\n~Ibu Rudi Paling Cantik Sendiri Dirumah",
            "Jadilah perempuan yang baik untuk kedepannya, jangan mempermainkan laki-laki jika tidak ingin dipermainkan oleh laki-laki suatu saat nanti ~Mbak Yani",
            "Mbak zahra moga ndang rabi punya anak lima ~Adek Rudi",
            "JANGAN SEDIH",
            "Jajajajajaja ~Anaknya adek",
            "Kontolku gede loh ~Reza",
            "Punyaku lebih gede ~Irpan",
            "Zahra siapa ~Dev",
            "Tante jahro bandar bokep",
            "18. Selalu ingat, nasi padang itu lebih enak dimakan pakai tangan, daripada pake sekop. Gw lagi makan ditanya kata-kata ~Putri ayu",
            "Kalau capek jangan menyerah, kecuali menyerah buat makan seblak. ~Ana tembem",
            "Jika hidupmu terasa pahit, coba tambahin gula. ~Riyan",
            "Hidup itu seperti mie instan, kadang simpel tapi sering ribet. ~Pak Eko",
            "Kalau jomblo jangan khawatir, yang penting masih bisa coli ~Pascol lokal",
            "JANGAN NONTON BOKEP MULU",
            "JANGAN SANGEAN",
            "JANGAN COLMEK MULU, NANTI MELAR",
            "26. GESEK DIKIT GAPAPA DEH ",
        ];

        let currentMessageIndex = 0;
        let popupClosed = false; 

        const popupElement = document.getElementById("popup");
        const popupMessageElement = document.getElementById("popup-message");
        const closeBtn = document.getElementById("close-btn");

        function updatePopupMessage() {
            popupMessageElement.textContent = messages[currentMessageIndex];

            if (currentMessageIndex >= 7 && currentMessageIndex <= 25 && !popupClosed) { 
                popupElement.classList.add("large");
                closeBtn.classList.add("show");
            } else {
                popupElement.classList.remove("large");
                closeBtn.classList.remove("show");
            }

            currentMessageIndex = (currentMessageIndex + 1) % messages.length; 

            if ([8, 9, 10, 18, 19, 20, 21, 25].includes(currentMessageIndex)) {
                setTimeout(updatePopupMessage, 8000);
            } else {
                setTimeout(updatePopupMessage, 1300); 
            }
        }

        updatePopupMessage();

        closeBtn.addEventListener("click", () => {
            popupElement.classList.remove("large");
            closeBtn.classList.remove("show");
            popupClosed = true; // Tandai popup sudah ditutup
        });

        popupElement.onmousedown = function(event) {
            let shiftX = event.clientX - popupElement.getBoundingClientRect().left;
            let shiftY = event.clientY - popupElement.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                popupElement.style.left = pageX - shiftX + 'px';
                popupElement.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            popupElement.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                popupElement.onmouseup = null;
            };
        };

        popupElement.ondragstart = function() {
            return false;
        };
        
