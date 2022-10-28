function isAnagram(str1,str2){

        // des longueurs différentes
        if (str1.length !== str2.length) {
            return false;
        }

            //Triez les deux chaînes.
            var s1 = str1.split('').sort().join('');
            var s2 = str2.split('').sort().join('');
            //Comparez les deux chaînes triées.
            return (s1 === s2);
}

//console.log(isAnagram('abc','cba'))
console.log(isAnagram('cafe','tate'))