# Javascript Type Coercion in Arithmetic Operations
This code demonstrates an unexpected behavior in Javascript when performing arithmetic operations on strings that contain only numbers. Javascript automatically converts these strings to numbers, which can lead to unexpected results if not handled carefully.

## Bug
The function `foo` adds two inputs. When both inputs are numbers, the addition works correctly. However, when one or both inputs are strings containing numbers, Javascript implicitly converts them to numbers before performing the addition. This can lead to unexpected results if you expect string concatenation instead of numerical addition.

## Solution
To avoid this issue, explicitly check the type of the inputs and handle them accordingly. One solution is to convert the inputs to numbers using `parseInt()` or `parseFloat()` before performing the addition. This ensures that the addition is performed numerically and not as string concatenation.