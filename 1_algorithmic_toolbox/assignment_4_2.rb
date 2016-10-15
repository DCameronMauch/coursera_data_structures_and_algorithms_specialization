#!/usr/bin/env ruby

count = $stdin.readline.to_i
data = $stdin.readline.split(" ").map(&:to_i).sort

mid = count /2

candidate = data[mid]

majority = (0..mid).any? do |index|
  data[index] == candidate && data[index + mid] == candidate
end

puts majority ? 1 : 0
