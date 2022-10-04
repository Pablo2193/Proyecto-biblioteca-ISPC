package com.mati.app.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mati.app.entity.Book;
import com.mati.app.service.BookService;

@RestController
@RequestMapping("/api/books")
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	//Create a new book
	@PostMapping
	public ResponseEntity<?> create (@RequestBody Book book){
		return ResponseEntity.status(HttpStatus.CREATED).body(bookService.save(book));
	}
	
	//Read an book
	@GetMapping("/{id}")
	public ResponseEntity<?> read(@PathVariable(value = "id") Long bookId){
		Optional<Book> oBook = bookService.findById(bookId);
		if(!oBook.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(oBook);		 
	}
	
	//Update an book
	@PutMapping("/{id}")
	public ResponseEntity<?> update (@RequestBody Book bookDetails, @PathVariable(value = "id" )Long bookId){
		
		Optional<Book> book = bookService.findById(bookId);
		
		if(!book.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		book.get().setTitle(bookDetails.getTitle());
		book.get().setDate(bookDetails.getDate());
		book.get().setAuthor(bookDetails.getAuthor());
		book.get().setCategory(bookDetails.getCategory());
		book.get().setEdit(bookDetails.getEdit());
		book.get().setLang(bookDetails.getLang());
		book.get().setPages(bookDetails.getPages());
		book.get().setDescription(bookDetails.getDescription());
		book.get().setEjemplares(bookDetails.getEjemplares());
		book.get().setStock(bookDetails.getStock());
		book.get().setAvailable(bookDetails.getAvailable());
		
		
		return ResponseEntity.status(HttpStatus.CREATED).body(bookService.save(book.get()));
	}
	
	//Delete an book
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete (@PathVariable(value = "id") Long bookId){
		
		if(!bookService.findById(bookId).isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		bookService.deleteById(bookId);
		return ResponseEntity.ok().build();
	
	}
	//Read All book
	@GetMapping
	public List<Book> readAll(){
		List<Book> users = StreamSupport
				.stream(bookService.findAll().spliterator(), false)
				.collect(Collectors.toList());
		
		return users;
	}

}
