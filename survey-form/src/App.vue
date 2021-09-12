<template>
<p class="survey_form">Survey Form</p>
<div class="app">
  <div>
<label>Name:</label>
<input type="text">
  </div>
<br>
<div>
<label>Middle Name:</label>
<input type="text">
</div>
<br>
<div>
<label>Surname:</label>
<input type="text">
</div>
<br>
<div>
  <label>Adress:</label>
  <input type="textarea" maxlenght="100">
</div>
<br>
<div>
  <label>Age:</label>
  <input type="number">
</div>
<br>
<div>
  <label>Phone number</label>
  <input type="number" placeholder="07...">
</div>
<br>
<div>
<label for="studies">Studies</label>
<select id="studies" name="studies">
  <option value="student">Student</option>
  <option value="master">Master</option>
  <option value="employee">Emloyee</option>
</select>
</div>
<br>
<div>
  <p>What animal do you have?</p>
<input type="radio" id="dog" name="dog" value="text">
  <label for="dog">Dog</label><br>
  <input type="radio" id="cat" name="cat" value="text">
  <label for="cat">Cat</label><br>
  <input type="radio" id="Parrot" name="parrot" value="text">
  <label for="parrot">Parrot</label>
</div>
<br>
<span>
 <button type="submit" class="submit">Submit</button>
 <button type="reset" class="reset">Reset</button>
</span>
</div>
</template>

<script>


export default {
  name: 'App',
  
}
</script>


