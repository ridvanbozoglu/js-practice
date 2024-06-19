// Q-1
// Bir dizideki çift sayıları bulun ve her birinin karesini alın
const findEven = arr => {
    const  newArray = arr.filter(num => num % 2 === 0);
    return newArray.map(prev => prev*prev)
}

// Q-2
// Bir dizideki tüm sayıları toplayın

const sumArr = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue,
0)

// Q-3
//Bir dizideki ilk çift sayıyı bulun

const findFirstEven = arr => arr.find(num=>num%2===0)

// Q-4 
// Bir dizideki tüm sayıların pozitif olup olmadığını kontrol edin.

const isAllPositive = arr => arr.find(num => num < 0) ? false : true;

// Q-5 
// Bir diziyi küçükten büyüğe sıralayın

const sortIncrement = arr => arr.sort((a, b) => a - b)

// Q-6 
// Bir dizinin belirli bir elemanı içerip içermediğini kontrol edin.

const doesIncludes = (arr,num) => arr.inclues(num)

// Q-7 
// Bir dizideki iç içe dizileri tek bir düz dizi haline getirin
const flatArray = arr => arr.flat(Infinity)

// Q-8
// Bir nesnedeki tüm anahtarları ve değerleri ayrı ayrı diziler halinde listeleyin

const keysAndValues = object => {
    const keys = Object.keys(object)
    const values = Object.values(object)
}

// Q-9 
// Bir dizideki tekrarlayan elemanları çıkarın

const removeDuplicates = arr => arr.filter((item,index) => arr.indexOf(item) === index)


// Q-10
/* bir fonksiyon yazalım (array in tüm elemanları verilen ikinci parametreden 
 büyükse true bir tane bile küçük varsa false dönsün.) ve bu fonksiyon 
 parametre olarak bir array ve bir de minSayı parametre olarak alsın
*/
const isAllGreater = (arr, minSayi) => arr.find(num => num < minSayi) ? false : true;

// Q-11
/* const person = { name: 'Alice', age: 25, city: 'London' }; verilen objenin key-
value değerlerinin bir dizi olarak listelenmesini sağlayan fonksiyon. Örn output: 
[['name', 'Alice'], ['age', 25, ['city', 'London']]
*/

const objToArray = object => Object.keys(object).map(key =>[key,object[key]])


// Q-12
// Bir dizide en az bir elemanın belirli bir koşulu sağlayıp sağlamadığını kontrol 
// edin

const isSatisfactory = (arr, condition) => arr.every(element => condition(element)) ? true : false;

// Q-13
// Bir string içinde belirli bir substring in  bulunup bulunmadığını kontrol edin
const doesStringIncludes = (text,search) => text.inclues(search)

// Q-14 
// Bir dizideki en büyük sayıyı bulun.
const findMax = arr => Math.max(...arr)

// Q-15
// Bir string dizisini tamsayı dizisine dönüştürün
const stringToNumber = arr => arr.map(string => Math.round(Number(string)))

// Q-16
// İki diziyi birleştiren fonksiyon yazın
const combineTwoArrays = (arr1,arr2) => arr1.concat(arr2)

// Q-17
// Bir dizideki belirli bir elemanın indeksini bulun
const findIndexOf = (arr, element) => arr.indexOf(element)

// Q-18
// Bir diziyi tersine çevirin
const reverseArray = arr => arr.reverse()

// Q-19
/* ki nesneyi birleştirin. 
 const obj1 = { name: 'John' };
 const obj2 = { age: 30 };
*/
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Q-20
// Bir diziden belirli bir aralığı alın
const sliceArray = (arr, firstIndex, LastIndex) => arr.slice(firstIndex,LastIndex)

// Q-21
/*
Aşağıdaki öğrenci nesnesinde, her öğrencinin aldığı derslerden en yüksek notu 
bulun ve bu notların toplamını hesaplayın.
const students = [
{ name: 'John', grades: { math: 80, science: 85, history: 90 }},
{ name: 'Jane', grades: { math: 90, science: 95, history: 85 }},
{ name: 'Jim', grades: { math: 70, science: 75, history: 80 }},
]; */
const students = [
    { name: 'John', grades: { math: 80, science: 85, history: 90 }} ,
    { name: 'Jane', grades: { math: 90, science: 95, history: 85 }},
    { name: 'Jim', grades: { math: 70, science: 75, history: 80 }},
];

const findBestClassOfStudents = arrayOfStudents => {
    let total = 0;
    arrayOfStudents.forEach(student => {
        let max = 0
        for(let lecture in student.grades){
            if(student.grades[lecture]>max){
                max = student.grades[lecture]
            }
        }
        total += max
    })
    return total
}

const total = findBestClassOfStudents(students)

// Q-22
// Bir dizideki sayılardan sadece asal olanları bulun ve her birinin karesini alın

// Code to check if given number is prime 
function checkPrime(num) {
    if (num <= 1) return false;  
    if (num <= 3) return true;   
    if (num % 2 == 0 || num % 3 == 0) return false;  
    let i = 5;
    while (i * i <= num) {
        if (num % i == 0 || num % (i + 2) == 0)
            return false;
        i += 6;
    }
    return true;
}
// filtering if number is prime and if it is pushing it to new array then maping new array to square every element.
const squareOfPrimes = (arr) => arr.filter(num => checkPrime(num)).map(number => number * number)

// Q-23
/*
Aşağıdaki öğrenci listesini yaş gruplarına göre gruplayın. örn. sonuc = // { '20': 
['Alice', 'Charlie'], '22': ['Bob', 'Edward'], '23': ['David'] }
const students = [
{ name: 'Alice', age: 20 },
{ name: 'Bob', age: 22 },
{ name: 'Charlie', age: 20 },
{ name: 'David', age: 23 },
{ name: 'Edward', age: 22 }
] */

const studentsArray = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 23 },
    { name: 'Edward', age: 22 }
    ];

const groupStudentsByNotes = arrOfStudents => {
    // empty array
    const groupedByNotes = {}
    // itterating over array
    arrOfStudents.forEach(student => {
        // creating empty array if does not exist
        if (!groupedByNotes[student.age]) {
            groupedByNotes[student.age] = [];  
        }
        // pushing the new student name to array
        groupedByNotes[student.age].push(student.name);
    })
    return groupedByNotes
}

groupStudentsByNotes(studentsArray)

// Q-24
// Aşağıdaki karmaşık diziyi düzleştirin ve her bir öğeyi iki katına çıkarın
const flatArrayAndDouble = array =>  array.flat(Infinity).map(number => number*2)


// Q-25
/* Bir dizideki kelimeleri anahtar, kelime uzunluklarını değer olarak içeren bir 
nesne oluşturun */

const words = ['apple', 'banana', 'cherry', 'date'];

const createObjFromStringArr = arr => {
    const obj = {}
    arr.forEach(string => {
        obj[string] = string.length
    })
    return obj
}

console.log("Q-25 = ",createObjFromStringArr(words)); 

// Q-26
/*bir dizideki en az bir öğrencinin hem matematik hem de fen bilgisinden 80'den 
fazla aldığını kontrol edin */

const studentQ26 = [
    { name: 'John', grades: { math: 80, science: 85 }},
    { name: 'Jane', grades: { math: 75, science: 95 }},
    { name: 'Jim', grades: { math: 70, science: 75 }}
    ]

    // some method koşulu saglayan ilk durumda true döner
const doesGeniusExist = arr => arr.some(student => student.grades.math >= 80 && student.grades.science >= 80 )

console.log("Q-26 = ",doesGeniusExist(studentQ26)); 

// Q-27
//Bir dizideki tüm öğrencilerin en az bir dersten 70'ten fazla aldığını kontrol edin
const studentsQ27 = [
    { name: 'John', grades: { math: 80, science: 85, history: 90 }},
    { name: 'Jane', grades: { math: 90, science: 65, history: 85 }},
    { name: 'Jim', grades: { math: 70, science: 75, history: 60 }}
    ]

const atleastOneNoteAbove70 = arrOfObject => {
    for(let student of arrOfObject){
        if(!(Object.values(student.grades).some(note => note > 70))){
            return false
        }
    }
    return true
}

console.log("Q-28 = ",atleastOneNoteAbove70(studentsQ27)); 


// Q-28
// Bir nesne dizisinin derin kopyasını oluşturun
const studentsQ28 = [
    { name: 'John', grades: { math: 80, science: 85 }},
    { name: 'Jane', grades: { math: 75, science: 95 }}
    ];

const deepCopy = obj => JSON.parse(JSON.stringify(obj));

console.log("Q-28 = ",deepCopy(studentsQ28)); 

// Q-29
// Bir dizide, belirli bir öğrencinin belirli bir dersten aldığı notu bulun
const studentsQ29 = [
    { name: 'John', grades: { math: 80, science: 85 }},
    { name: 'Jane', grades: { math: 75, science: 95 }}
    ];

const findNoteOfSpesStudent = (arr,name,lectureName) => {
    for(let student of arr) {
        if(student.name === name){
            return student.grades[lectureName]
        }
    }
    return null
}

// Q-30 
/* Bir dizideki tüm öğrencilerin sadece matematik notlarını içeren bir dizi 
oluşturun, 80'den düşük notları filtreleyin ve kalan notları %10 artırın */
const studentsQ30 = [
    { name: 'John', grades: { math: 80, science: 85 }},
    { name: 'Jane', grades: { math: 75, science: 95 }},
    { name: 'Jim', grades: { math: 60, science: 75 }}
    ];

const isAbove80 = arr => {
    const mathResults = []
    for(let student of arr){
        mathResults.push(student.grades.math)
    }
    return mathResults
    .filter(grade => grade>=80)
    .map(grade => grade*1.1)
}

// Q-31
/*Aşağıdaki nesne dizisini yaşlarına ve aynı yaşta olanları isimlerine göre 
sıralayın*/
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'Dave', age: 25 }
    ];

const sortObjects = arr => {
    // sorting array
    return arr.sort((a, b) => { 
        //sorting by age if ages are not equal
        if(a.age !== b.age){
            return a.age - b.age
        }
        // if ages are equal sort by name
        else {
            return a.name.localeCompare(b.name)
        }
    })
}
    
console.log("Q-31 = ",sortObjects(people))


// Q-32
/*Aşağıdaki nesne dizisini aynı key leri  birleştirerek tek bir nesne oluşturun*/
const mergeArrayOfObjects = arr => {
    return arr.reduce((acc, obj) => {
        for (let key in obj) {
            if (acc[key]) {
                acc[key] += obj[key];
            } else {
                acc[key] = obj[key];
            }
        }
        return acc;
    }, {});
};




// Q-33 
/*Aşağıdaki öğrenci dizisinde her öğrencinin aldığı dersleri unique  olarak 
listeleyin.*/
const studentsQ33 = [
    { name: 'John', subjects: ['math', 'science', 'history'] },
    { name: 'Jane', subjects: ['math', 'art', 'history'] },
    { name: 'Jim', subjects: ['science', 'math', 'PE'] }
    ];

const allSubjectsArr = arrOfStudents => {
    const allLectures = [];
    arrOfStudents.forEach(student => {
        // pushing all the subject names to an empty array
        allLectures.push(student.subjects)
    })
    // since the allLecture array have indentation it is needed to flatten to single degree
    const flattedArray = allLectures.flat(Infinity)
    // removing duplicates and returning the new array
    return flattedArray.filter((item,index) => flattedArray.indexOf(item) === index);
}

allSubjectsArr("Q-33 = ",studentsQ33)


// Q-34
/* Bir nesnedeki tüm key leri  büyük harfe çevirin
Best question ever !!! since there is no direct answer on the internet 
and had to brainstorm for couple of minutes and application of RECURSION !!!*/

const allKeysToUppercase = obj => {
    // object to return
    const newObj = {};
    // looping through primary key value couples
    for (let key in obj) {
        // if the value of key is object and is not null
        if (typeof obj[key] === "object" && obj[key]) {
            // call this function again until there is no object child
            newObj[key.toUpperCase()] = allKeysToUppercase(obj[key]);
        } else {
            // if it is not an object just create a uppercase key and assign the value to it.
            newObj[key.toUpperCase()] = obj[key];
        }
    }
    // return the new object
    return newObj;
};

// Q-35
/*Aşağıdaki nesne dizisinde her öğrencinin aldığı derslerin notlarını ayrı ayrı 
listeleyin*/
const studentsQ35 = [
    { name: 'John', grades: { math: 80, science: 85 }},
    { name: 'Jane', grades: { math: 75, science: 95 }}
    ];

const listStudentGradesBySubject = arr => {
    const newArray = []
    arr.forEach(student => {
        for(let subject in student.grades){
            newArray.push({ name: student.name, subject: subject, grade: student.grades[subject] });
        }
    });
    return newArray;
}

console.log(listStudentGradesBySubject(studentsQ35));



// Q-36
/*Bir dizideki öğrencileri yaşlarına göre gruplandırın ve 20 yaşından büyük 
olanları grupların içine yerleştirin*/
const studentsQ36 = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 23 },
    { name: 'Edward', age: 22 }
    ]

const groupIfAbove20 = (arr) => {
    const newArray = []   
    arr.forEach((person) => {
        if(person.age>20){
            newArray.push(person)
        }
    }) 
    return newArray
}

console.log(groupIfAbove20(studentsQ36));

// Q-37
/*Bir dizideki öğrencilerin aldıkları dersleri ve bu derslerdeki toplam notlarını 
hesaplayın*/
const studentsQ37 = [
    { name: 'John', grades: { math: 80, science: 85 }},
    { name: 'Jane', grades: { math: 75, science: 95 }},
    { name: 'Jim', grades: { math: 60, science: 75 }}
    ];

const sumofSubjectNotes = (arr) => {
    const returnObj = {}
    arr.forEach((student) => {
        for(let subject in student.grades){
            if(returnObj[subject]){
                returnObj[subject] += student.grades[subject]
            }else returnObj[subject] = student.grades[subject]
        }
    })
    return returnObj
}

console.log(sumofSubjectNotes(studentsQ37));

// Q-38
/*Bir dizideki tüm kelimelerin belirli bir harf ile başlayıp başlamadığını kontrol 
edin*/
const doesElementsStartsWith = (arr,char) => {
    const charToLowerCase = char.toLowerCase()
    const toLowerCase = arr.map(element => element.toLowerCase())

    return toLowerCase.every(element => element[0]===charToLowerCase)
}

// Q-39
/*Bir nesne dizisinde en az bir öğrencinin belirli bir dersten 90'dan fazla aldığını 
kontrol edin*/
const hasStudentScoredAbove90InSubject = (arr, subject) => {
    return arr.some(student => student.grades[subject]>90)
}

// Q-40
/*Bir dizi içinde iç içe diziler olduğunu varsayalım, bu iç kısımda yer alan da 
dizileri de dahil ederek hepsini tek bir array de birleştirelim ve bu arrayler 
s4 js homework6string içeriyor bu stringleri in içindeki harfleri de sıralayarak tek bir string 
olarak dönelim soruyu anlatmak çok zor input ve output u görünce 
anlayacaksınız */
const wordsQ40 = [['hello', 'world'], ['foo', 'bar'], 'baz', 'quux'];

const sortArrayByChar = (arr) => {
    const flattedArray = arr.flat(Infinity);
    return flattedArray.join('').split('').sort().join('');
}

console.log(sortArrayByChar(wordsQ40));


// Q-41
/*Bir nesne dizisinde belirli bir anahtarın ortalama değerini bulun ve bu 
anahtarın ortalamadan küçük olanlarını döndürün */
const dataQ41 = [
    { name: 'Alice', score: 45 },
    { name: 'Bob', score: 55 },
    { name: 'Charlie', score: 65 },
    { name: 'David', score: 35 }
    ];

const belowAvarage = (arr, key) => {
    let total = 0;
    
    arr.forEach(student => {
        total += student[key];
        
    })
    const average = total/(arr.length)

    const belowAve = arr.filter(student => student[key] > average)
    return belowAve
}

console.log(belowAvarage(dataQ41));

// Q-42
/*Bir dizi içindeki tüm sayıları düzleştirin, sadece tek olanları seçin, her birinin 
kübünü alın ve toplamlarını hesaplayın*/
const reduceArray = (arr) => {
    const flattedArr = arr.flat(Infinity)
    const sum = flattedArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue*currentValue,
        0
      );
    return sum
}

// Q-43
/*Bir nesne dizisinde belirli bir anahtarın maksimum değerini bulun ve bu 
anahtarın maksimumdan küçük olanlarını döndürün */
const belowMax = (arr, key) => {
    let max = arr[0][key];
    arr.forEach(object => {
        max = (object[key] > max) ? object[key] : max;
    })
    return arr.filter(object => object[key] < max)
}

// Q-44
/*Bir dizi içindeki tüm kelimeleri düzleştirin, her kelimenin tersini alın ve bu 
kelimeleri birleştirerek tek bir string oluşturun */
const flatAndReverseArr = (arr) => {
    const flattedReversed = arr.flat(Infinity);
    const reversedArr = flattedReversed.map(el => el.split('').reverse().join(''));
    const joinedReversedArr = reversedArr.join("");
    return joinedReversedArr
}

// Q-45
/*Bir dizi içindeki tüm kelimeleri düzleştirin, her kelimenin uzunluğunu alın ve bu 
uzunlukların toplamını hesaplayı*/
const reduceStringLength = (arr) => {
    const flattedReversed = arr.flat(Infinity);
    const total = flattedReversed.reduce(
        (accumulator, currentWord) => accumulator + currentWord.length,
        0
    );
    return total  
}

// Son Örnek :))

const studentAnalize = (arr) => {
    // Öğrencilerin aktiviteleri arasında 'chess' olanları seçin.
    const chessPlayers = arr.filter(student => student.activities.includes("chess"));
    // Bu notları almış öğrencilerin isimlerini büyük harfe çevirin.
    const toUpperCase = chessPlayers.map(student => ({
        ...student,
        name: student.name.toUpperCase()
    }));
    // Bu öğrencilerin aktivitelerini alfabetik olarak sıralayın.
    const sortedActivities = toUpperCase.map(student => {
        return {
            ...student,
            activities: student.activities.sort()
        };
    });   
    // Öğrencilerin aldıkları derslerden 80'den yüksek notları filtreleyin ve sonucu return et
    const final = sortedActivities.map(student => {
        const above80 = [];
        for(let subject in student.grades){
            if(student.grades[subject]>80){
                above80.push(subject);
            }
        }
        delete student.grades;
        return {
            name : student.name, 
            highGrades : above80,
            activities : student.activities
        }
    })
    return final
}



