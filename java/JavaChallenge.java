package problems;

import java.util.List;
import java.util.Arrays;
import java.util.HashMap;

class JavaChallenge {

    static HashMap<String, String> rot13map = new HashMap<>() {
        {
            put("a", "n");
            put("b", "o");
            put("c", "p");
            put("d", "q");
            put("e", "r");
            put("f", "s");
            put("g", "t");
            put("h", "u");
            put("i", "v");
            put("j", "w");
            put("k", "x");
            put("l", "y");
            put("m", "z");
            put("n", "a");
            put("o", "b");
            put("p", "c");
            put("q", "d");
            put("r", "e");
            put("s", "f");
            put("t", "g");
            put("u", "h");
            put("v", "i");
            put("w", "j");
            put("x", "k");
            put("y", "l");
            put("z", "m");
        }
    };

    // assume only single words can be inputs
    public static String ROT13(String original) {
        List<String> charArray = Arrays.asList(original.split(""));
        String ans = "";
        for (int i = 0; i < charArray.size(); i++) {
            if (charArray.get(i) == charArray.get(i).toUpperCase()) {
                String temp = charArray.get(i).toLowerCase();
                temp = rot13map.get(temp).toUpperCase();
                ans += temp;
            } else
                ans += rot13map.get(charArray.get(i));
        }
        return ans;
    }

    public static StringBuilder decToOctal(int decimalVal) {
        StringBuilder ans = new StringBuilder("");
        while (decimalVal > 0) {
            ans.append(decimalVal % 8);
            decimalVal = decimalVal / 8;
        }
        return ans.reverse();
    }

    public static void main(String[] args) {
        System.out.println(decToOctal(35));
        System.out.println(decToOctal(0));
        System.out.println(decToOctal(100));
        System.out.println(decToOctal(8));
    }
}