import math

class Solution:
    def smallestNumber(self, num: str, t: int) -> str:
        temp_t = t
        for p in [2, 3, 5, 7]:
            while temp_t % p == 0:
                temp_t //= p
        if temp_t > 1:
            return "-1"
        
        n = len(num)
        
        def get_min_needed_digits(val):
            if val <= 1:
                return []
            digits = []
            for d in [9, 8, 7, 6, 5, 4, 3, 2]:
                while val % d == 0:
                    digits.append(d)
                    val //= d
            if val > 1:
                return None
            return sorted(digits)

        prefix_products = [1] * (n + 1)
        has_zero = [False] * (n + 1)
        
        for i in range(n):
            d = int(num[i])
            if d == 0:
                has_zero[i+1] = True
            else:
                has_zero[i+1] = has_zero[i]
            
            current_digit = max(1, d)
            prefix_products[i+1] = math.gcd(t, prefix_products[i] * current_digit)
        
        if not has_zero[n]:
            total_prod = prefix_products[n]
            if total_prod % t == 0:
                return num

        for i in range(n - 1, -1, -1):
            if has_zero[i]:
                continue
                
            pref_prod = prefix_products[i]
            remaining_t = t // math.gcd(t, pref_prod)
            
            start_digit = int(num[i]) + 1
            for d in range(start_digit, 10):
                rem_after_d = remaining_t // math.gcd(remaining_t, d)
                min_suffix = get_min_needed_digits(rem_after_d)
                
                if min_suffix is None:
                    continue
                    
                rem_positions = n - 1 - i
                
                if len(min_suffix) <= rem_positions:
                    ones_count = rem_positions - len(min_suffix)
                    suffix = ['1'] * ones_count + [str(x) for x in min_suffix]
                    return num[:i] + str(d) + "".join(suffix)
                    
        target_len = n + 1
        while True:
            min_digits = get_min_needed_digits(t)
            if len(min_digits) <= target_len:
                ones_count = target_len - len(min_digits)
                return '1' * ones_count + "".join(str(x) for x in min_digits)
            target_len += 1
