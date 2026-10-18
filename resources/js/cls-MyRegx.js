class MyRegx {

// return value only if 'searchVal' has regular expression as like java..
// else return null;
	function toRegxAuto(searchVal) {
		if(searchVal === null || searchVal === '' || searchVal === undefined) null;
		searchVal = searchVal.toLowerCase().trim();
		
		// agar humne pehle se he regx di hai..
		if(searchVal.startsWith('^(')){
			return searchVal;
		} 

		const OR = searchVal.includes('||');
		const AND = searchVal.includes('&&');

		if(OR && AND){
			// this is regular expression area..
			var A = toComplexRegxPattern(searchVal);
			//console.log(" A1 = "+A);
			A = normRegxOR(A);
			//console.log("     A2 = "+A);
			return (A.includes('|') || A.includes('(?=.*'))? A: null;
		}
		
		if(!OR && AND){
			var A = toComplexRegxPattern(searchVal);
//			console.log("     AND 1 = "+searchVal);
//			console.log("     AND 2 = "+A);
			return  A.includes('(?=.*') ? A : null;
		}
		
		if(OR && !AND){
			var A = normRegxOR(searchVal);
			//console.log("     OR 1 = "+searchVal);
			//console.log("     OR 2 = "+A);
			return  A.includes('|') ? A : null;
		}
		
		return null;
	}
	
	// this will remove only OR operator at the end and starting.
	function toNormalAuto(searchVal) {
		if(searchVal === null || searchVal === '' || searchVal === undefined) null;
		
		// agar humne pehle se he regx di hai..
		if(searchVal.startsWith('^(')){
			return searchVal;
		}
		
		if(searchVal.includes('||')){
			var A = normRegxOR(searchVal);
			//console.log("     OR 1 = "+searchVal);
			//console.log("     OR 2 = "+A);
			return  A.includes('|') ? A : null;
		}
		
		return searchVal;
	}
	
	// bcoz OR regx is simple..
	function normRegxOR(A){
		A = A.replaceAll("||","|").trim();
		A = A.includes(" |")?A.replaceAll(" |","|"):A;
		A = A.includes("| ")?A.replaceAll("| ","|"):A;
		A = A.includes("| |")?A.replaceAll("| |","|"):A;
		A = A.includes("| |")?A.replaceAll("| |","|"):A;
		
		A = A.startsWith("|")?A.substring(1).trim():A;
		A = A.endsWith("|")?A.substring(0,A.length-1).trim():A;
		return A;
	}


    /**
     * Yeh function user ki logical string ko RegEx Pattern mein convert karta hai
     * Input Example: "(Anil && Kumar) || (sunil && sharma)"
     */
    toComplexRegxPattern(queryString) {
	
        // Step 1: Saare extra spaces ko clean karein
        let query = queryString.trim();

        // Step 2: Pehle individual AND groups (brackets ke andar) ko process karte hain
        // Yeh regex un brackets ko dhundega jinke andar && symbols hain
        // Jaise: (Anil && Kumar) -> (?=.*Anil)(?=.*Kumar)
        query = query.replace(/\(([^)]+)\)/g, (match, groupContent) => {
            // Brackets ke andar ke words ko '&&' se split karein
            let words = groupContent.split('&&').map(w => w.trim());
            // Har word ko lookahead format (?=.*word) mein convert karein
            return '(' + words.map(w => `(?=.*${w})`).join('') + ')';
        });

        // Step 3: Agar brackets ke bahar bhi kuch akele words && ke sath hain, unhe convert karein
        // Step 4: Logic ke '||' (OR) ko RegEx ke pipe '|' mein badlein
        query = query.replace(/\|\|/g, '|');

        // Step 5: Agar final string mein multiple options hain (OR ke sath), toh shuru mein '^' lagayein
        let finalPattern = `^(?:${query})`;
		
		return finalPattern;

        // Final Regular Expression Object return karein (Case-Insensitive 'i' flag ke sath)
        // return new RegExp(finalPattern, 'i');
    }
}
