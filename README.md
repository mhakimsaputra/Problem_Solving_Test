# Problem_Solving_Test
Kompleksitas kodingan saya adalah O(n), di mana n adalah panjang string input.

Pada kodingan tersebut, terdapat penggunaan stack untuk memeriksa keseimbangan tanda kurung. Setiap karakter dalam string input str akan diperiksa satu per satu. Jika karakter tersebut adalah tanda kurung buka (seperti `(', '{', atau '['), maka akan dimasukkan ke dalam stack. Jika karakter tersebut adalah tanda kurung tutup (seperti ')', '}', atau ']'), maka akan dilakukan pengecekan dengan tanda kurung terakhir yang ada di stack. Jika tanda kurung tutup tersebut sesuai dengan tanda kurung terakhir yang ada di stack, maka tanda kurung terakhir akan dihapus dari stack. Jika tidak sesuai atau stack kosong, maka akan mengembalikan nilai "NO".

Setelah semua karakter dalam string input str diperiksa, maka akan dilakukan pengecekan apakah stack kosong. Jika stack kosong, maka akan mengembalikan nilai "YES", karena semua tanda kurung telah seimbang. Jika stack tidak kosong, maka akan mengembalikan nilai "NO", karena masih ada tanda kurung yang tidak seimbang.

Kompleksitas waktu dari kodingan tersebut yaitu O(n), karena setiap karakter dalam string input str diperiksa satu per satu. Kompleksitas ruangnya adalah O(n), karena dalam kasus terburuk, semua karakter dalam string input str akan dimasukkan ke dalam stack.
