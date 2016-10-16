#!/usr/bin/env ruby

n = $stdin.readline.to_i
a = $stdin.readline.split(" ").map(&:to_i).sort

def partition3(a, l, r)
  x = a[l]
  m1 = m2 = l
  (l + 1..r).each do |i|
    if a[i] < x
      m2 += 1
      a[i], a[m1], a[m2] = a[m2], a[i], a[m1]
      m1 += 1
    elsif a[i] == x
      m2 += 1
      a[i], a[m2] = a[m2], a[i]
    end
  end
  [m1, m2]
end

def randomized_quick_sort(a, l, r)
  return nil if l >= r

  k = rand(l..r)
  a[l], a[k] = a[k], a[l]
  m1, m2 = partition3(a, l, r)
  randomized_quick_sort(a, l, m1 - 1);
  randomized_quick_sort(a, m2 + 1, r);
end

randomized_quick_sort(a, 0, n - 1)
puts a.join(" ")
