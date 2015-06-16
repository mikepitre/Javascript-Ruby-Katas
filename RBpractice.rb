# Normal Mode

def hello_world
  puts "Hello World"
end

def fizzbuzz(range)
  (1..range).each do |i|
    if (i % 3 == 0) && (i % 5 == 0)
      puts "fizzbuzz"
    elsif (i % 3 == 0)
      puts "fizz"
    elsif (i % 5 == 0)
      puts "buzz"
    else
      puts i
    end
  end
end


def age_verifier(age)
  if age < 21
    puts "Too young"
  else
    puts "Proceed"
  end
end

# Hard Mode

def pigatize(word)
  if word.downcase.start_with?("a" || "e" || "i" || "o" || "u")
    puts word + "way"
  else
    first_letter = word[0]
    word[1..-1] + first_letter + "ay"
  end
end

#Nightmare Mode

def age_verifier(age_arr)
  (age_arr).each do |i|
  if i < 21
    puts "Too young"
  else
    puts "Proceed"
  end
  end
end






